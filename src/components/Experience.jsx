import React from "react";
import ExperieceLogo from "../assets/ExperienceLogo.svg";

const Education = () => {
  const Experience = [
    {
      index: 1,
      logo: ExperieceLogo,
      role: "Student Software Engineer",
      company: "NYU IT High Speed Research Network",
      timeline: "Jan 2024 - Current",
      location: "New York, US",
      hoverColor: "purple-800",
    },
    {
      index: 2,
      logo: ExperieceLogo,
      role: "Salesforce Platform Developer",
      company: "Wipro Limited",
      timeline: "Jul 2021 - Feb 2023",
      location: "Bangalore, India",
      hoverColor: "purple-800",
    },
    {
      index: 3,
      logo: ExperieceLogo,
      role: "Full Stack Developer",
      company: "VIT Vellore",
      timeline: "Jan 2021 - Jun 2021",
      location: "Vellore India",
      hoverColor: "purple-800",
    },
  ];

  return (
    <div
      name="Experience"
      className="mt-4 py-2 mx-2 md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#aba79d] to-[#344e41]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        Experience
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center h-full my-2 mx-4 md:mx-8 rounded-md">
        {Experience.map((exp) => (
          <div className="w-full group flex flex-col justify-center items-center md:w-1/3 bg-inherit hover:md:bg-white py-2 m-2 rounded-md shadow-md hover:md:scale-105 duration-200 cursor-pointer">
            <div className="">
              <img className="size-32" src={exp.logo} alt="Experience Logo" />
            </div>
            <div className=" flex flex-col items-center">
              <h3 className="text-1xl sm:text-1xl font-bold mt-1 text-my-bg-color group-hover:md:text-gray-500 duration-200">
                {exp.role}
              </h3>
              <h4 className="text-1xl sm:text-1xl font-semibold mt-1 text-my-bg-color group-hover:md:text-gray-500 duration-200">
                {exp.company}
              </h4>
              <h5 className="text-1xl sm:text-1xl font-semibold mt-1 text-my-bg-color group-hover:md:text-gray-500 duration-200">
                {exp.timeline}
              </h5>
              <h6 className="text-1xl sm:text-1xl mt-1 text-my-bg-color group-hover:md:text-gray-500 duration-200">
                {exp.location}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
