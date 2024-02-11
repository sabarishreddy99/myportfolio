import React from "react";
import MVCLogo from "../assets/MVCLogo.jpg";
import GradeVitianLogo from "../assets/GradevitianLogo.jpg";
import ShemsLogo from "../assets/ShemsLogo.jpg";

const Projects = () => {
  const projects = [
    {
      index: 1,
      thumbnail: MVCLogo,
      title: "Motor Vehicle Crash Analysis using BigData",
      logoalt: "MVC Logo",
      CodeHref: () =>
        (window.location.href =
          "https://github.com/sabarishreddy99/BigData_CS-GY-6513_Fall2023_Proj.git"),
      DemoHref: () =>
        (window.location.href =
          "https://github.com/sabarishreddy99/BigData_CS-GY-6513_Fall2023_Proj/blob/main/MVC_BDA_Final_Report_Doc.pdf"),
    },
    {
      index: 2,
      thumbnail: ShemsLogo,
      title: "Smart Home Energy Management System",
      logoalt: "SHEMS Logo",
      CodeHref: () =>
        (window.location.href =
          "https://github.com/sabarishreddy99/CS-GY-6083-SHEMS-Fall-23"),
      DemoHref: () =>
        (window.location.href =
          "https://github.com/sabarishreddy99/CS-GY-6083-SHEMS-Fall-23/blob/main/PDS%20Project%20Final%20Report-3.pdf"),
    },
    {
      index: 3,
      thumbnail: GradeVitianLogo,
      title: "gradeVITian.in",
      logoalt: "gradevitian logo",
      CodeHref: () =>
        (window.location.href =
          "https://github.com/sabarishreddy99/gv-official"),
      DemoHref: () => (window.location.href = "https://gradevitian.in"),
    },
  ];
  return (
    <div
      name="Projects"
      className="mt-4 py-4 mx-2  md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#aba79d] to-[#344e41]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        Projects
      </h4>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8">
        {projects.map((project) => (
          <div
            key={project.index}
            className="group shadow-md shadow-gray-600 rounded-lg md:mx-4 md:mt-4 bg-gradient-to-b from-[#aba79d] to-[#344e41] px-3 py-2 cursor-pointer"
          >
            <img
              className="rounded-md group-hover:md:scale-105 duration-200"
              src={project.thumbnail}
              alt={project.logoalt}
            />
            <h3 className="mt-2 text-center text-my-bg-color text-1xl font-semibold">
              {project.title}
            </h3>
            <div className="flex flex-row justify-around mt-2">
              <button
                onClick={project.DemoHref}
                className="group w-fit px-6 py-3 my-2 flex items-center rounded-full bg-my-bg-color cursor-pointer shadow-md hover:bg-[#faedcd] duration-200"
              >
                Demo
              </button>
              <button
                onClick={project.CodeHref}
                className="group w-fit px-6 py-3 my-2 flex items-center rounded-full bg-my-bg-color cursor-pointer shadow-md hover:bg-[#faedcd] duration-200"
              >
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
