<template>
  <div class="my-3 px-12">
    <div class="my-7 flex w-full justify-between items-center">
      <h1 class="text-2xl font-medium">Popular Movies</h1>
      <h2 class="opacity-50 cursor-pointer">Explore more</h2>
    </div>
    <div class="flex gap-3 max-w-full overflow-x-auto"
    
    >
      <MovieCard v-for="movie in movieData.results" :key="movie.id" :movie="movie"/>
     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieData: Object,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
