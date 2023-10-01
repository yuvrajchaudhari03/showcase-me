/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue-color': '#001C55',
        'body-color': '#EDF9FE',
        'light-grey-color': '#7F8DAA',
        'highlight-color': '#A6E1FA',
      },
      keyframes: {
        slideDownEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
        slideRightEnter: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
        slideLeftEnter: {
          "0%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slideDownEnter: "slideDownEnter .8s ease-in-out",
        slideUpEnter: "slideUpEnter .8s ease-in-out",
        slideRightEnter: "slideRightEnter .8s ease-in-out",
        slideLeftEnter: "slideLeftEnter .8s ease-in-out",
      },
    },
  },
  plugins: [],
}