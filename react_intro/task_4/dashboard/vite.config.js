import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/holbertonschool-web_react_intro/",
  plugins: [react()],
})
