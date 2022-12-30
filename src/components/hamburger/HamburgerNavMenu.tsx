import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

export function NavMenu({ isOpen }: any) {
  return (
    <motion.div className="nav-menu-container">
      <motion.div className="nav-list">
        <motion.div
          className="nav-link"
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a href="#">Home</a>
        </motion.div>
        <motion.div
          className="nav-link"
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <a href="#" className="">
            Services
          </a>
        </motion.div>
        <motion.div
          className="nav-link"
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <a href="#" className="">
            About
          </a>
        </motion.div>
        <motion.div
          className="nav-link"
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <a href="#" className="">
            Contact
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
