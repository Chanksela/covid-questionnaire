/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flyin: "flyin 2s ease-out",
        fadein: "fadein 2s ease-in",
        pagefadein: "fadein 1s ease-out",
        scaleup: "scaleup 1s ease-in-out",
        popup: "popup 1s ease-in-out",
        popdown: "popdown 1s ease-in-out",
        heartin: "heartin 1s ease-out",
        starup: "starup 3s ease-in",
        stardown: "stardown 3s ease-in",
      },
      keyframes: {
        flyin: {
          "0%, 50%": { transform: "translate(-1000px, -1000px)" },
          "100%": { transform: "translate(0px)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleup: {
          "0%": { transform: "translate(-200px) scale(0)" },
          "100%": { transform: "translate(0px) scale(1)" },
        },
        popdown: {
          "0%": { transform: "translate(200px, -200px) scale(0)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        popup: {
          "0%": { transform: "translate(-200px, 200px) scale(0)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        heartin: {
          "0%": { transform: "translateY(500px) scale(20)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
        starup: {
          "0%, 50%": { transform: "translate(-10px, 100px)", opacity: "0" },
          "100%": { transform: "translate(0px, 0px)", opacity: "1" },
        },
        stardown: {
          "0%, 50%": { transform: "translate(-10px, -30px)", opacity: "0" },
          "100%": { transform: "translate(0px, 0px)", opacity: "1" },
        },
      },
      width: {
        field: "513px",
      },
      height: { field: "50px" },
      shadow: {
        testXL: "text-shadow: 5px 10px;",
      },
    },
  },
  plugins: [],
};
