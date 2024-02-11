import React from "react";
import SocialLinks from "./SocialLinks.jsx";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-screen py-4 bg-black flex flex-col justify-center items-center">
      <Link to="home" smooth duration={1000} offset={-130}>
        <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-full text-my-bg-color bg-my-dark-green cursor-pointer shadow-md hover:scale-105 duration-300">
          <span className="group-hover:scale-125 duration-300">
            <MdKeyboardDoubleArrowUp size={25} className="ml-1" />
          </span>
        </button>
      </Link>
      <SocialLinks />
      <h3 className="text-1xl sm:text-1xl font-semibold m-1 text-my-bg-color group-hover:md:text-gray-500 duration-200">
        Jaya Sabarish Reddy R &copy; 2024
      </h3>
    </div>
  );
};

export default Footer;
