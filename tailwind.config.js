module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'level--awful': '#AF88BC',
        'level--bad': '#E56682',
        'level--ok': '#F5AA76',
        'level--good': '#FBCE6E',
        'level--perfect': '#57B76F'
      }
    }
  },
  safelist: [
    'bg-level--awful',
    'bg-level--bad',
    'bg-level--ok',
    'bg-level--good',
    'bg-level--perfect'
  ],
  plugins: [require('@tailwindcss/forms')]
};
