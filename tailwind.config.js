module.exports = {
  darkMode: 'class',
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
      minHeight: {
        '83vh': '83vh',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
