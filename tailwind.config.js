/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: 'rgba(2, 6, 23, 1)',
        background: 'rgba(253, 246, 227, 1)',
        muted: 'rgba(101, 123, 131, 1)',
        border: 'rgb(229, 231, 235)',
        accent: 'rgba(7, 54, 66, 1)',
      },
    },
  },
  plugins: [],
}
