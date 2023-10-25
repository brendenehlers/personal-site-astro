const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'background': '#FBF5F3',
        'card-background': '#FFFFFF',
        'text': '#080708',
        'text-light': '#7F7979',
        'code': '#7F7979',
        'border': '#080708',
        'border-light': '#7F7979',
        'accent': '#7F7979',
        'link': '#446DF6',
        'link-hover': '#FB6107',
      }
    },
  },
  plugins: [],
};
