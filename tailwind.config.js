import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#05683b",
          secondary: "#febe10",
        },
      },
      {
        dark: {
          primary: "#05683b",
          secondary: "#febe10",
        },
      },
    ],
  },
};