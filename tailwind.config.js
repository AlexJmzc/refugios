/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#264653",
        secondary: "#2A9D8F",
        tertiary: "#E9C46A",
        quaternary: "#F4A261",
        fifth: '#E76F51'
      },
    },
  },
  plugins: [],
}

