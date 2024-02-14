import React from "react";

const AboutMe = () => {
  const content = [
    { p: <>Greetings!</> },
    {
      p: (
        <>
          I'm Jaya Sabarish Reddy Remala, a dedicated computer science
          professional currently pursuing a <i>Master of Sciences</i> degree in
          Computer Science at <strong>New York University</strong>, United
          States, where I'm expanding my knowledge and skills in a wide range of
          areas, such as Data Structures and Algorithms, Big Data, Operating
          Systems, Principles of Database Systems, Software Engineering, and
          Info/Data Visualization. With a solid foundation established during my{" "}
          <i>Bachelor of Technology</i> in Electrical and Electronics
          Engineering at <b>VIT University</b>, India.
        </>
      ),
    },
    {
      p: (
        <>
          In my current role as a Student Software Engineer at NYU IT High-Speed
          Research Network, I am contributing to the development of core
          interface dashboards for the expanding Corelink project. Leveraging
          Next.js, React, Tailwind, and Gitlab, I ensure efficient and
          user-friendly solutions for data visualization and analysis.
          Previously, at Wipro Limited, I led the development of a
          groundbreaking maritime application for Shell Oil Company, resulting
          in a significant increase in efficiency in tracking crude oil
          shipments and optimizing supply chain management. This involved
          utilizing Apex, VF Pages, SF Lightning Web Components, and Analytics
          Studio to provide comprehensive insights and automate processes.
          Additionally, my experience as a Full Stack Developer at VIT
          University equipped me with the skills to create high-performing web
          applications, including a computational progressive web application
          with advanced SEO techniques that achieved high rankings on Google.
        </>
      ),
    },
    {
      p: (
        <>
          <strong>
            I am actively seeking opportunities and connections that align with
            my interests and aspirations in computer science, especially in
            Software Development or Full-Stack Engineering roles. I welcome you
            to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/sabarishreddyrj/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:scale-105 hover:text-blue-300 duration-300"
            >
              LinkedIn
            </a>{" "}
            or contact me via{" "}
            <a
              href="mailto:jr6421@nyu.edu"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:scale-105 hover:text-blue-300 duration-300"
            >
              Email
            </a>{" "}
            (jr6421@nyu.edu).
          </strong>
        </>
      ),
    },
  ];
  return (
    <div
      name="About"
      className="mt-4 py-2 mx-2 md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#495057] to-[#212529]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        About Me
      </h4>

      <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 md:ml-8 text-my-bg-color">
        <div>
          {content.map((textContent) => (
            <>
              <p className="mb-2">{textContent.p}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
