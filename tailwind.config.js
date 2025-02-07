/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anonymousPro: ['Anonymous Pro', 'monospace'],
        kanit: ['Kanit', 'serif'],
        robotoMono: ['Roboto Mono', 'sans-serif', 'mono']
      },
      fontSize: {
        'xxs': ['0.625rem', '0.875rem'],
    },
      animation: {
        marquee: 'marquee 1000s linear infinite',
        'bounce-slow': 'bounce 1s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        //violet-300 , violet-950
        'custom': '0 2px 6px -1px rgba(196, 181, 253, 0.5), 0 2px 2px -1px rgba(46, 16, 101, 0.06);',
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
}

