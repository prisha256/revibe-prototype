// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF',
        'surface': '#F7F7F7',
        'primary': '#000000',
        'secondary': '#555555',
        'accent': '#FF4500',
        'border': '#EAEAEA',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config