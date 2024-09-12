<script setup>
import { onMounted, ref } from "vue";
const { $useTmdbFetch, _route } = useNuxtApp();
const movieDetails = ref(null);

onMounted(async () => {
  const id = _route.params.id;
  const { data } = await $useTmdbFetch(`movie/${id}`);
  console.log(data)
  movieDetails.value = data.value;
});
</script>

<template>
  <Banner :movieData="movieDetails" />
  <MediaDetails :getData="movieDetails" />
</template>

<style lang="css"></style>
