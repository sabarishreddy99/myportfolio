import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiApachespark } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTaichigraphics } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { DiLinux } from "react-icons/di";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <IoLogoJavascript size={20} />,
      title: "Javascript",
    },
    {
      id: 2,
      icon: <FaJava size={20} />,
      title: "Java",
    },
    {
      id: 3,
      icon: <FaReact size={20} />,
      title: "React Js",
    },
    {
      id: 4,
      icon: <FaPython size={20} />,
      title: "Python",
    },
    {
      id: 5,
      icon: <SiApachespark size={20} />,
      title: "Spark",
    },
    {
      id: 6,
      icon: <SiApachehadoop size={20} />,
      title: "Hadoop",
    },
    {
      id: 7,
      icon: <BiLogoPostgresql size={20} />,
      title: "Postgre SQL",
    },
    {
      id: 8,
      icon: <TbBrandMysql size={20} />,
      title: "MY SQL",
    },
    {
      id: 9,
      icon: <FaBootstrap size={20} />,
      title: "Bootstrap",
    },
    {
      id: 10,
      icon: <FaCss3 size={20} />,
      title: "CSS3",
    },
    {
      id: 11,
      icon: <FaHtml5 size={20} />,
      title: "Html5",
    },
    {
      id: 12,
      icon: <SiTaichigraphics size={20} />,
      title: "Matlab",
    },
    {
      id: 13,
      icon: <FaGitAlt size={20} />,
      title: "Git",
    },
    {
      id: 14,
      icon: <FaWordpress size={20} />,
      title: "Wordpress",
    },
    {
      id: 15,
      icon: <TbBrandDjango size={20} />,
      title: "Django",
    },
    {
      id: 16,
      icon: <DiLinux size={20} />,
      title: "Linux",
    },
  ];
  return (
    <div
      name="Skills"
      className="mt-4 py-4 mx-2  md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#aba79d] to-[#344e41]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        Skills
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 m-2 md:px-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-2 rounded-lg flex justify-center items-center bg-[#aba79d] hover:md:bg-slate-50 duration-500 cursor-pointer"
          >
            <h6 className="mr-2">{skill.icon}</h6>
            <h6>{skill.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
