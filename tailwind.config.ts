import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xsm: "360px",
      xs: "476px",
      // xs: "425px",
      sm: "640px",
      md: "768px",
      bs: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",

      "2xl-mx": { max: "1535px" },
      "xl-mx": { max: "1279px" },
      "lg-mx": { max: "1023px" },
      "bs-mx": { max: "899px" },
      "md-mx": { max: "767px" },
      "sm-mx": { max: "639px" },
      "xs-mx": { max: "475px" },
      "xsm-mx": { max: "349px" },
    },
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)"],
      },
      colors: {
        primary: "#9747FF",
        "light-primary-txt": "#030e35",
        "light-secondary-txt": "#6f7d95",
        "dark-primary-txt": "#ebf0ff",
        "dark-secondary-txt": "#829aa6",
        "dark-primary-bg": "#001321",
        "dark-secondary-bg": "#011E30",
        "light-primary-bg": "#F4F6F9",
      },
      backgroundImage: {
        "primary-btn-bg": "linear-gradient(315deg, rgb(115, 74, 232) 0%, rgb(0, 211, 197) 74%)",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;
