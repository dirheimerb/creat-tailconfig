const fs = require('fs')

const tailwindConfig = `
module.exports = {
    darkMode: ['class', '[data-mode="dark"]'], // or 'media' or 'class'
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // Or if using 'src' directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
  plugins: [],
}`

const tailCSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;`

const postCSSConfig = `
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}`



fs.writeFileSync('tailwind.config.js', tailwindConfig, 'utf8')
fs.writeFileSync('postcss.config.js', postCSSConfig, 'utf8')
fs.writeFileSync('tailwind.css', tailCSS, 'utf8')
