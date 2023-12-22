/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-green": "#3FD049",
        "p-ash":"#505050",
        "lime":"#F0FFD7"
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
