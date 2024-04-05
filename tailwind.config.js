/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#22A3F1",
        "navy-blue": "#294364",
        "light-gray": "#8D9FB7",
        "light-blue": "#F3FAFE",
        "silver-sky": "#CAD2DE",
        gray: "#677487",
        black: "#000000",
        orange: "#FF8015",
        'max-light-gray': "#8d9fb73d"
      },
      dropShadow: {
        1: "0px 5px 5px rgba(0,0,0,0.07)",
        2: "0px 3px 3.5px rgba(34,163,241,0.2)",
        3: "0px 5px 5px rgba(0,0,0,0.16)",
        4: "0px 3px 3px rgba(0,0,0,0.16 )"
      },
    },
  },
  plugins: [],
};
