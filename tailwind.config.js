module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#3730a3',
          hover: '#312e81',
        }
      },
      width: {
        '90vw': '90vw',
      },
      minHeight: {
        '83vh': '83vh',
      }
    },
  },
  plugins: []
}
