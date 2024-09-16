import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   darkMode: 'selector',
   theme: {
      extend: {
         colors: {
            'background-dark': '#121212',
            'background-light': '#FFFFFF',
            'color-dark': '#E6E6E6',
            'border-dark': '#303030',
         },
      },
   },
   plugins: [],
}

export default config
