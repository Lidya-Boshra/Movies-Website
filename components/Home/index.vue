<script setup>
const { $useTmdbFetch } = useNuxtApp();

const { data, pending, error } = await $useTmdbFetch("movie/popular");


const movieData = data.value;
</script>

<template>
  <div>
    <HomeBanner :movieData="movieData" />
    <HomeMovies :movieData="movieData" />
    <div class="mt-14">
      <HomeTV />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
