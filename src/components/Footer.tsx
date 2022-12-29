import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
type Props = {};

export default function Footer(props: Props) {
  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2022{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            BorsyVideo
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <BsYoutube size={'1.25rem'} />
            <span className="sr-only">Youtube page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <BsFacebook size={'1.25rem'} />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FaInstagram size={'1.25rem'} />
            <span className="sr-only">Instagram page</span>
          </a>
        </div>
      </div>
    </>
  );
}
