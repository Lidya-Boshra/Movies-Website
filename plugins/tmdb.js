export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  const useTmdbFetch = (endpoint, options = {}) => {
    const url = `${config.tmdbBaseURL}${endpoint}?api_key=${config.tmdbApiKey}`;
    return useFetch(url, options);
  };

  nuxtApp.provide("useTmdbFetch", useTmdbFetch);
});
