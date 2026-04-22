/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-dark-base': '#1A1A2E',
        'accent-gold': '#FFD700',
        'accent-blue': '#007BFF',
        'neutral-white': '#FFFFFF',
        'secondary-light-gray': '#E0E0E0',
        'secondary-medium-gray': '#888888',
        'error-red': '#DC3545',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'Noto Sans KR', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
      },
      fontSize: {
        'h1-desktop': '48px',
        'h1-mobile': '36px',
        'h2-desktop': '36px',
        'h2-mobile': '28px',
        'h3-desktop': '28px',
        'h3-mobile': '22px',
        'body-lg': '18px',
        'body-base': '16px',
        'body-sm': '14px',
        'cta-btn': '18px',
      },
    },
  },
  plugins: [],
}