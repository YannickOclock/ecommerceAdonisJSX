import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.tsx'],
    }),
    preact(),
  ],
})
