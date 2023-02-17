module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/renderer/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/editor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-window": "black",
        "dark-window-text": "white",
      },
      padding: {
        window: "5px",
        toolbar: "10px",
      },
      zIndex: {
        top: "10",
        middle: "5",
        bottom: "1",
      },
    },
  },
  plugins: [],
};
