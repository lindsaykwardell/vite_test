import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import elmPlugin from "vite-plugin-elm";


export default defineConfig({
  plugins: [
    RubyPlugin(),
    elmPlugin()
  ],
})
