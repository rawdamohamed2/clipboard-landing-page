/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "hsl(171, 66%, 44%)",
        blue:'hsl(233, 100%, 69%)',
        Gray700:'hsl(210, 10%, 33%)',
        Gray500:'hsl(201, 11%, 66%)',
      },
    },
  },
  plugins: [],
}
