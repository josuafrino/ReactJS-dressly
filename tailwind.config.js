/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-100": "#fdfdfd",
        "neutral-900": "#12070b",
        white: "#fff",
        "neutral-100": "#f4f4f4",
        "neutral-500": "#262626",
        darksalmon: "#e09370",
        "neutral-300": "#bdbdbd",
        "primary-300": "#f5ccab",
        "primary-200": "#fbe3c9",
        "primary-700": "#a14b38",
        "background-900": "#e6e6e6",
        "danger-500": "#ff4530",
        gray: "rgba(38, 38, 38, 0.5)",
        "neutral-700": "#1b1314",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "label-2-10px-regular": "Ubuntu",
        "display-1-56px-semibold": "Lora",
        "paragraph-1-16px-semibold": "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "6xs-6": "6.6px",
        "5xs-6": "7.6px",
        "5xl-5": "24.5px",
        "5xs-5": "7.5px",
      },
    },
    fontSize: {
      "3xs": "10px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      xs: "12px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      mini: "15px",
      "33xl-4": "52.4px",
      "12xl": "31px",
      "23xl": "42px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
