import React from 'react';

type Props = {};

export default function Navbar(props: Props) {
  return (
    <nav className="sm:pl-24 sm:py-12 max-md:px-2 max-md:py-2.5 uppercase">
      <div className="container flex flex-wrap items-center max-sm:justify-between mx-auto">
        <a href="#" className="flex items-center pr-6">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            BorsyVideo
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="gold"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white md:p-0 hover-underline-animation tracking-[.3em]
                font-bold leading-tight"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 text-white hover-underline-animation tracking-[.3em] font-bold leading-tight"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
