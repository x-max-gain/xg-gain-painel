import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        'mr-50': '-50px', // Adiciona a classe m-[-50px]
      },
      colors: {
        background: {
          primary: "#09090B",
          secondary: "#131315",
          green: "#08DD7E"
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
        },
        icons: {
          primary: "#929292",
          active: "#08DD7E",
          background: "#27272A"
        },
        border: {
          primary: "#75FFC1",
          secondary: "#393939"
        },
        button: {
          primary: "#08DD7E",
          secondary: "#393939",
          hover: "#049354"
        },
      },
      translate: {
        profile: '-10rem'
      }
    },
  },
  plugins: [],
};
export default config;
