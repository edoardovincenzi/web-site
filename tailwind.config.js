/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#EEE2E2',
        textPrimary: '#2F4858',
        textCardDescription: '#EEE2E2',
        bgCardDescription: '#2F4858',
        bgCard1: '#98c1d9',
        bgCard2: '#ee6c4d',
      },
    },
  },
  plugins: [],
};
