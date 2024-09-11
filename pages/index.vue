<script setup>
const { $useTmdbFetch } = useNuxtApp();
const [
  { data: movieData, pending: moviePending, error: movieError },
  { data: TVData, pending: TVPending, error: TVError },
] = await Promise.all([
  $useTmdbFetch("movie/popular"),
  $useTmdbFetch("tv/popular"),
]);
</script>
<template>
  <div>
    <Banner :movieData="movieData.results[0]" />
    <div class="my-3 px-12">
      <div class="my-7 flex w-full justify-between items-center">
        <h1 class="text-2xl font-medium">Popular Movies</h1>
        <h2 class="opacity-50 cursor-pointer">Explore more</h2>
      </div>
      <div class="flex gap-3 max-w-full overflow-x-auto">
        <MediaCard
          v-for="movie in movieData.results"
          :key="movie.id"
          :getData="movie"
          :routeURL="`/movie/${movie?.id}`"
        />
      </div>
    </div>
    <div class="my-3 px-12">
      <div class="my-7 flex w-full justify-between items-center">
        <h1 class="text-2xl font-medium">Popular TV Shows</h1>
        <h2 class="opacity-50 cursor-pointer">Explore more</h2>
      </div>
      <div class="flex gap-3 max-w-full overflow-x-auto">
        <MediaCard
          v-for="tv in TVData.results"
          :key="tv.id"
          :getData="tv"
          :routeURL="`/tv/${tv?.id}`"
        />
      </div>
    </div>
  </div>
</template>
