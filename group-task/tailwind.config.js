/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1E4FFE",
      },
      backgroundImage: {
        "sign-up": `url("https://i.pinimg.com/736x/f7/fe/f6/f7fef63970ddd892ae29b1f99c1a0348.jpg")`,
        "log-in": `url("/images/login-image.png")`,
      },
    },
  },
  plugins: [],
};
