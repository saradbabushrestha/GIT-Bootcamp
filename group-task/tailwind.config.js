/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-color": "#1E4FFE",
      },
      backgroundImage: {
        "sign-up": `url("/images/signup-image.png")`,
        "log-in": `url("/images/login-image.png")`,
      },
    },
  },
  plugins: [],
};
