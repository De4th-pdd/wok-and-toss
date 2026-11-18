import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        smokedSoy: {
          DEFAULT: '#171715',
          50: '#2A2926',
          100: '#23221F',
          200: '#1D1D1B',
          900: '#171715',
          950: '#0F0F0E',
        },
        ricePaper: {
          DEFAULT: '#F3EBDD',
          light: '#F8F4EC',
          dark: '#E7DEC9',
        },
        warmPorcelain: {
          DEFAULT: '#FFFAF2',
          card: '#FFF7EB',
        },
        roastedChilli: {
          DEFAULT: '#A8482F',
          hover: '#913B24',
          active: '#782F1B',
          light: '#F6E8E4',
        },
        wokCopper: {
          DEFAULT: '#C7653B',
          glow: 'rgba(199, 101, 59, 0.25)',
        },
        toastedSesame: {
          DEFAULT: '#C2A36B',
          light: '#E2D1B0',
          dark: '#9A7D46',
        },
        mutedText: {
          DEFAULT: '#73675A',
          dark: '#4A4138',
          light: '#9E9284',
        },
      },
      fontFamily: {
        serif: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
