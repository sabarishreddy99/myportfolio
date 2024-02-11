import React from "react";

const AboutMe = () => {
  return (
    <div
      name="About"
      className="mt-4 py-2 mx-2 md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-[#fdf0d5] bg-gradient-to-b from-[#aba79d] to-[#344e41]"
    >
      <h4 className="text-3xl sm:text-5xl font-bold text-[#fdf0d5] hover:text-my-bg-color duration-200 m-4 md:ml-14 my-2">
        About Me
      </h4>

      <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 md:ml-8 text-my-bg-color">
        <div>
          <p>
            As a Salesforce Developer at Wipro, I worked on various applications
            for Shell, a leading oil and gas company, handling configuration,
            debugging, enhancement, and deployment tasks, as well as following
            ITIL processes. I leveraged my Salesforce Platform Developer
            certification and my skills in triggers, workflows, flows, process
            builders, aura component bundle, sales and experience cloud, and
            analytics studio to deliver robust, scalable, and user-friendly
            solutions. I received multiple awards and recognitions for my
            contributions, including Victory League Habit Flagbearer as #Thinker
            #ImpactPlayer and #Achiever, and Certificate of Appreciation by AOMS
            (SFDC).
          </p>
          <br />
          <p>
            Currently, I am pursuing my Master's in Computer Science at New York
            University, where I am expanding my knowledge and skills in a wide
            range of areas, such as Data Structures and Algorithms, Big Data,
            Operating Systems, Principles of Database Systems, Software
            Engineering, and Information Visualization. I am passionate about
            learning new technologies and applying them to real-world problems.
            I am actively seeking opportunities and connections that align with
            my interests and aspirations in computer science, especially in
            Software Development or Full-Stack Engineering roles.
          </p>
          <br />
          <p>
            <strong>
              I welcome you to connect with me on LinkedIn or contact me via
              email (jr6421@nyu.edu).
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
