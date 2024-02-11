import React from "react";
import propic from "../assets/propic.png";
import SocialLinks from "./SocialLinks.jsx";
import { Link } from "react-scroll";

import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const bulletpoints = [
    { p: <strong>#OpenToWork</strong> },
    { p: "Actively Seeking SDE/ Full Stack Summer’24 Intern Roles" },
    { p: "MS CS @ New York University" },
    { p: "Student Software Engineer at NYU-IT HSRN" },
  ];

  return (
    <div
      name="home"
      className="mt-32 py-8 mx-2 md:max-w-screen-xl md:mx-auto rounded-lg md:w-full bg-gradient-to-b from-[#aba79d] to-[#344e41]"
    >
      <div className="flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="md:order-2">
          <img
            className="rounded-full mx-auto w-1/2 md:w-2/3 border-double border-8 border-my-bg-color shadow-md hover:w-3/4 duration-1000"
            src={propic}
            alt="Profile Pic of Jaya Sabarish Reddy R"
          />
        </div>

        <div className="justify-center h-full md:w-2/3 mt-4 ml-8 md:ml-14 md:order-1 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#fdf0d5]">
            I'm Jay
            <span className="text-2xl sm:text-5xl text-my-bg-color">a</span>
          </h2>
          <h3 className="text-1xl sm:text-4xl font-bold mt-2 text-my-bg-color">
            Sabarish Reddy Remala
          </h3>
          <h4 className="text-2xl sm:text-5xl font-bold my-2 text-[#dbd8a6]">
            Software Engineer
          </h4>
          {bulletpoints.map((point) => (
            <p className="text-1xl text-my-bg-color ">{point.p}</p>
          ))}

          <SocialLinks />

          <div>
            <Link
              to="About"
              smooth
              duration={500}
              offset={-130}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-[#fefae0] to-[#faedcd] cursor-pointer shadow-md"
              onclick="window.location.href='#'"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
