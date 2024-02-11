/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sign: ["Pacifico"],
      },
      colors: {
        "my-bg-color": "#dad7cd",
        "my-dark-green": "#344e41",
        "my-xtra-dark-green": "#344e41",
        "text-green": "#a3b18a",
      },
    },
  },
  plugins: [],
};
