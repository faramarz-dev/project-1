import scrollbarHide from "tailwind-scrollbar-hide"; // ✅ اضافه شده
import type { Config } from "tailwindcss";

export const fontSize = {
  xxs: "12px",
  xs: "13px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "32px",
  "5xl": "36px",
  "6xl": "40px",
  "7xl": "48px",
  "8xl": "64px",
  "9xl": "80px",
};

export const boxShadow = {
  "1": "0px 1px 15px rgba(0, 0, 0, 1);",
  "2": "0px 3px 8px rgba(0, 0, 0, 0.24) ;",
  "3": "0px 47px 65px rgba(21, 28, 38, 0.1)",
  "4": "4px 6px 23px rgba(228, 92, 35, 0.1)",
  "5": "4px 4px 40px rgba(16, 24, 40, 0.1)",
  "6": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  inner: "inset 0px 40px 80px #FCFCFC",
};

// رنگ‌ها و breakpointها بر اساس تعریف شما
export const colors = {
  // رنگ‌ها رو اینجا جایگذاری کن
};

export const screens = {
  xs: "360px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1440px",
  "3xl": "1600px",
  "4xl": "1792px",
  "5xl": "1920px",
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: fontSize,
    boxShadow: boxShadow,
    screens: screens,
    extend: {
      colors: colors,
      animation: {
        fade: "fadeEffect 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-in-out",
        "slide-out": "slideOut 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-out forwards", // ✅ افکت سفارشی
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [
    scrollbarHide, // ✅ پلاگین مخفی‌سازی اسکرول‌بار
    function ({
      addVariant,
    }: {
      addVariant: (arg0: string, arg1: string) => void;
    }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

export default config;
