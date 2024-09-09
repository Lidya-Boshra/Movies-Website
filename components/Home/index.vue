<script setup>
import { useFetch } from "@vueuse/core"; // Import useFetch if not already

const { data, pending, error, refresh } = await useFetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=55be2352a95420c9b7dd9b351e884058"
);

console.log(JSON.parse(data.value));
</script>

<template></template>

<style lang="css" scoped></style>
