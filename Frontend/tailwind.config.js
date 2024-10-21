/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#001233ff",
      secondary: "#002855ff",
      standard: "#5c677dff",
      base: "#33415cff",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
