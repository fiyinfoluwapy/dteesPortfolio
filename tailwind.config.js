/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oleo: ["Oleo Script", "cursive"],
        lobster: ["Lobster Two", "cursive"],
        cormorant: ["Cormorant", "serif"],
        chakra: ["Chakra Petch", "san-serif"],
      },
      colors: {
        crayolaOrchid: "#df9dd0",
        babyPink: "#f4bfc3",
        tan: "#fbd3b8",
        lemon: "#f6f6c8",
        lime: "#dbe996",
        green: "#8ab4a1",
        white: "#f1f1f1",
      },
    },
  },
  plugins: [],
}

