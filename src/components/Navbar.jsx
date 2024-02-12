import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      heading: "home",
    },
    {
      id: 2,
      heading: "About",
    },
    {
      id: 3,
      heading: "Education",
    },
    {
      id: 4,
      heading: "Experience",
    },
    {
      id: 5,
      heading: "Projects",
    },
    {
      id: 6,
      heading: "Skills",
    },
    {
      id: 5,
      heading: "Contact",
    },
  ];

  return (
    <div className="flex justify-around">
      <div class="flex justify-between items-center rounded-full w-11/12 shadow-md duration-200 h-20 text-black bg-my-dark-green fixed mt-8 mx-9 top-0 drop-shadow-md">
        <div>
          <Link to={"home"} smooth duration={500} offset={-130}>
            <h1 className="text-3xl font-sign ml-8 text-text-green hover:-rotate-12 hover:scale-105 duration-500 cursor-pointer">
              Hi there!
            </h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex mr-4">
            {links.map((link) => (
              <li
                key={link.id}
                className="px-4 cursor-pointer capitalize font-medium text-neutral-300 hover:scale-105 duration-200"
              >
                <Link to={link.heading} smooth duration={500} offset={-130}>
                  {link.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer pr-8 z-10 text-neutral-300"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#aba79d] to-[#344e41] text-neutral-300 rounded-md">
            {links.map((link) => (
              <li
                key={link.id}
                className="px-4 cursor-pointer capitalize font-semibold py-6 text-2xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link.heading}
                  smooth
                  duration={500}
                >
                  {link.heading}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
