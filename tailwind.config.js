/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        slate: 'var(--slate)',
        'light-slate': 'var(--light-slate)',
        'lightest-slate': 'var(--lightest-slate)',
        'terracotta': '#d97757',
        'terracotta-light': '#e07a5f',
        'terracotta-hover': '#e88a6f',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
