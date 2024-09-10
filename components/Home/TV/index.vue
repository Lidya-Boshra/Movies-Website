<script setup>
const { $useTmdbFetch } = useNuxtApp();

const { data, pending, error } = await $useTmdbFetch("tv/popular");

const movieData = data.value;
</script>
<template>
  <div class="my-3 px-12">
    <div class="my-7 flex w-full justify-between items-center">
      <h1 class="text-2xl font-medium">Popular TV Shows</h1>
      <h2 class="opacity-50 cursor-pointer">Explore more</h2>
    </div>
    <div class="flex gap-3 max-w-full overflow-x-auto">
      <MovieCard
        v-for="movie in movieData.results"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
