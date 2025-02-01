import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "#9C9C9D",
        bodyBackground:"#F3F0ED",
        primaryColor:"#737373",
        secondryColor:"#E3E3E3",
        cream:'#DFDAD7'
      },
      margin:{
        "16.5":"68px"
      },
      padding:{
        "24.5":"100px"
      },
      fontSize:{
        "34": "34px",
      },
      maxWidth:{
        "1436":"1436px"
      },
      aspectRatio:{
        "4/3":"4/3"
      }
    },
  },
  plugins: [],
} satisfies Config;
