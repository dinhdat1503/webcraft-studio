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
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          'deep-space': '#0B0F19',
          'catchie-navy': '#202050',
          'catchie-blue': '#5DADE2',
          'catchie-light': '#E0F2FE',
        },
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease both',
        'fade-in-up':   'fadeInUp 0.8s ease 0.1s both',
        'bounce-slow':  'bounce 2s ease-in-out infinite',
        'twinkle':      'twinkle 3s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 3s ease-in-out infinite alternate',
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
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #5DADE2, 0 0 20px #5DADE2' },
          to:   { boxShadow: '0 0 20px #5DADE2, 0 0 30px #5DADE2' },
        },
      },
      backgroundImage: {
        'grid-blue': `
          linear-gradient(rgba(93,173,226,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(93,173,226,0.05) 1px, transparent 1px)
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
