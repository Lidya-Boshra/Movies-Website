<script setup>
import { onMounted, ref } from "vue";
const { $useTmdbFetch } = useNuxtApp();
const movieDetails = ref(null);
const id = ref(null);

onMounted(async () => {
  id.value = useNuxtApp()._route.params.id;
  const { data, pending, error } = await $useTmdbFetch("movie/" + id.value);
  movieDetails.value = data.value;
});
</script>

<template>
  <Banner :movieData="movieDetails" />
  <MediaDetails :getData="movieDetails"/>
</template>

<style lang="css"></style>
