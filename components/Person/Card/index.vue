<template>
  <div class="cursor-pointer">
    <NuxtLink :to="routeURL">
      <div
        class="border-4 border-[#1F2021] w-[240px] h-[376px] hover:scale-105 duration-300"
      >
        <img
          :src="'https://image.tmdb.org/t/p/original/' + movie?.poster_path"
          alt="poster image"
          class="w-full h-full"
        />
      </div>
    </NuxtLink>

    <div class="mt-2">
      <h1>{{ movie?.title || movie?.name }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: Object,
    routeURL: String,
  },
  mounted() {},
};
</script>
<style></style>
