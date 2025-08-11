import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/opay-payoutdoc",
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {},
  },
})
