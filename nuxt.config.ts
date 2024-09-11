import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vesp/nuxt-fontawesome","nuxt-rating"],

  runtimeConfig: {
    public: {
      tmdbBaseURL: 'https://api.themoviedb.org/3/',
      tmdbApiKey: process.env.TMDB_API_KEY,
    }
  },

  plugins: ['~/plugins/tmdb.js'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
