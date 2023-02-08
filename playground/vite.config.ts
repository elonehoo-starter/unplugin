import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '@elonehoo/starter-unplugin/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin(),
  ],
})
