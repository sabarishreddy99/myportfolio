import React, { useState } from "react";
import NYULogo from "../assets/NYULogo.png";
import VITLogo from "../assets/VITLogo.jpg";

const Education = () => {
  const [hoveredUniversity, setHoveredUniversity] = useState(null);

  const universities = [
    {
      index: 1,
      logo: NYULogo,
      alt: "NYU Logo",
      location: "New York, United States",
      name: "New York University",
      degree: "Master Of Science (MS)",
      major: "Computer Science",
      minor: "",
      gradyear: "May 2025",
      hoverColor: "text-purple-800", // Add hover color property for NYU
    },
    {
      index: 2,
      logo: VITLogo,
      alt: "VIT Logo",
      location: "Vellore, India",
      name: "VIT University",
      degree: "Bachelor Of Technology (B.Tech)",
      major: "Electrical and Electronics Engineering",
      minor: "Computer Science",
      gradyear: "May 2021",
      hoverColor: "text-indigo-900", // Add hover color property for VIT
    },
  ];

  return (
    <div
      name="Education"
      className="mt-4 py-2 mx-2 md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#495057] to-[#212529]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        Education
      </h4>

      {universities.map((university, index) => (
        <div
          key={index}
          className="group flex flex-col md:flex-row items-center justify-center h-full my-4 mx-4 md:mx-8 p-2 rounded-md shadow-md bg-white md:bg-inherit hover:bg-white duration-1000 cursor-pointer"
          onMouseEnter={() => setHoveredUniversity(index)}
          onMouseLeave={() => setHoveredUniversity(null)}
        >
          <div className="flex flex-col md:order-2 items-center justify-center md:w-1/4">
            <img
              className="w-1/4 md:w-1/3 bg-white p-3 border-double rounded-md"
              src={university.logo}
              alt={university.alt}
            />
            <h6 className="mt-1 text-sm md:text-1xl text-gray-500 md:text-my-bg-color  group-hover:text-gray-500 duration-200">
              {university.gradyear}
            </h6>
            <h6 className="mt-1 text-sm md:text-1xl font-semibold text-gray-500 md:text-my-bg-color  group-hover:text-gray-500 duration-200">
              {university.location}
            </h6>
          </div>

          <div className="md:w-6/12 mt-2 mx-auto flex flex-col items-center md:items-start md:ml-12 md:order-1 md:mt-0">
            <h2
              className={`text-2xl sm:text-3xl font-semibold ${
                university.hoverColor
              } ${
                hoveredUniversity === index
                  ? `md:${university.hoverColor}`
                  : "md:text-[#fdf0d5]"
              } duration-200`}
            >
              {university.name}
            </h2>
            <h3 className="text-1xl sm:text-2xl font-bold mt-2 text-gray-500 md:text-my-bg-color group-hover:text-gray-500 duration-200">
              {university.degree}
            </h3>
            <h4 className="text-1xl sm:text-1xl font-bold mt-2 text-gray-500 md:text-my-bg-color group-hover:text-gray-500 duration-200">
              {university.major}
            </h4>
            <h4 className="text-1xl sm:text-1xl font-bold mt-2 text-gray-500 md:text-my-bg-color group-hover:text-gray-500 duration-200">
              {university.minor === "" ? "" : `Minors in ${university.minor}`}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
