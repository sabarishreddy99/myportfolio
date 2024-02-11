import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ContactMe = () => {
  return (
    <div
      name="Contact"
      className="mt-4 mb-4 py-4 mx-2  md:max-w-screen-xl md:mx-auto rounded-lg md:w-full border-solid border-2 border-my-dark-green shadow-lg"
    >
      <div>
        <h4 className="text-3xl sm:text-5xl font-bold text-[#000000] hover:text-slate-500 duration-200 m-4 md:ml-14 my-2">
          Contact Me
        </h4>
        <h5 className="m-4 md:ml-14 my-2">
          Submit the form below to get in touch with me!
        </h5>
      </div>

      <div className="m-4 my-2 bg-my-dark-green md:bg-transparent rounded-md shadow-md">
        <form
          className="flex flex-col items-center justify-center"
          action="https://getform.io/f/32c7c5d2-b9a8-4a97-b8ae-35f13a59c368"
          method="POST"
        >
          <label
            htmlFor=""
            className="mt-2 text-xl font-medium text-my-bg-color md:text-my-dark-green"
          >
            Name
          </label>
          <input
            className="w-4/5 md:w-1/3 p-2 border-2 rounded-full text-my-dark-green focus:outline-none shadow-md text-center"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label
            htmlFor=""
            className="mt-2 text-xl font-medium text-my-bg-color md:text-my-dark-green"
          >
            Email
          </label>
          <input
            className="w-4/5 md:w-1/3 p-2 border-2 rounded-full text-my-dark-green focus:outline-none shadow-md text-center"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label
            htmlFor=""
            className="mt-2 text-xl font-medium text-my-bg-color md:text-my-dark-green"
          >
            Message
          </label>
          <textarea
            name="message"
            id=""
            rows="10"
            className="w-4/5 md:w-1/3 p-2 border-2 rounded-lg text-my-dark-green focus:outline-none shadow-md text-center"
            placeholder="Hola! I hope you are doing well."
            required
          ></textarea>

          <button
            type="submit"
            className="group w-fit px-6 py-3 my-2 flex items-center rounded-full bg-[#faedcd] md:bg-my-dark-green md:text-my-bg-color cursor-pointer shadow-md hover:scale-105 duration-300 font-medium"
          >
            Let's talk
            <span className="group-hover:scale-125 duration-300">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
