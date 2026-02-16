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
        navy: {
          DEFAULT: '#01153E',
          50: '#E6E8ED',
          100: '#C0C6D5',
          200: '#8090AB',
          300: '#405A81',
          400: '#20375F',
          500: '#01153E',
          600: '#011238',
          700: '#010E2D',
          800: '#010A22',
          900: '#000616',
        },
        gold: {
          DEFAULT: '#EEBA2B',
          50: '#FDF9E9',
          100: '#FAEFBF',
          200: '#F7E594',
          300: '#F4DA6A',
          400: '#F1CF40',
          500: '#EEBA2B',
          600: '#D4A318',
          700: '#A57F12',
          800: '#775B0D',
          900: '#483707',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
