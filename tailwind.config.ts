import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter:  ['var(--font-inter)',  'sans-serif'],
      },
      colors: {
        brand: {
          red:      '#E12028',
          'red-dark': '#b81820',
          'red-light': '#ff3a42',
        },
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease both',
        'fade-in-up':   'fadeInUp 0.8s ease 0.1s both',
        'bounce-slow':  'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-red': `
          linear-gradient(rgba(225,32,40,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(225,32,40,0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
};

export default config;
