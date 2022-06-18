module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'red-200': 'hsl(12,88%, 59%)',
          'blue-600': 'hsl(228,39%, 23%)',
        },
        neutral: {
          'gray-blue-600': 'hsl(227, 12%, 61%)',
          'blue-800': 'hsl(233, 12%, 13%)',
          'red-800': 'hsl(13, 100%, 96%)',
          'gray-200': 'hsl(0, 0%, 98%)',
        },
      },
      backgroundImage: {
        mobile: "url('/images/bg-simplify-section-mobile.svg')",
        desktop: "url('/images/bg-simplify-section-desktop.svg')",
      },
    },
  },
  plugins: [],
}
