/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
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
          primary: "#056283b", // Note: This looks like a typo, perhaps "#05628b" or correct it
          secondary: "#febe10",
        },
      },
    ],
  },
}