import { motion, useAnimation, useCycle } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { MenuToggle } from './hamburger/MenuToggle';
import { NavMenu } from './hamburger/HamburgerNavMenu';

type Props = {};

// TODO
// hide the navbar when the user scrolls down
// show the navbar when the user scrolls up or stops

const menuVariants = {
  open: {
    transform: 'translateX(3%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
};

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

export default function Navbar(props: Props) {
  const navbarRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  function handleScroll() {
    const navbar: any = navbarRef.current;

    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#262322';
      // navbar.style.display = 'none';
    } else {
      navbar.style.backgroundColor = 'transparent';
      // navbar.style.display = 'block';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 uppercase block"
      ref={navbarRef}
    >
      <div className="container flex flex-wrap items-center max-sm:justify-between mx-auto">
        <a href="#" className="flex items-center pr-6">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <motion.span
            className="self-center text-xl font-semibold whitespace-nowrap text-white"
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            BorsyVideo
          </motion.span>
        </a>
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="inline-flex items-center text-sm text-white rounded-full md:hidden focus:outline-none relative"
        >
          <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
          <motion.div
            className="menu-container"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            transition={menuTransition}
          >
            {/* <motion.div className="top-container text-black">
              BorsyVideo
            </motion.div> */}
            <motion.div className="content-container">
              <NavMenu isOpen={isOpen} />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <motion.li
              initial={{ opacity: 0, scale: 0.5, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              // TODO mintha kis kepernyokon elbaszodna az animacio..
            >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white md:p-0 hover-underline-animation tracking-[.3em]
                font-bold leading-tight"
                aria-current="page"
              >
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                Services
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
