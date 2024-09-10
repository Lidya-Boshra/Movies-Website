<template>
  <div class="cursor-pointer">
    <div
      class="border-4 border-[#1F2021] w-[240px] h-[376px] hover:scale-105 duration-300"
    >
      <img
        :src="'https://image.tmdb.org/t/p/original/' + movie?.poster_path"
        alt="poster image"
        class="w-full h-full"
      />
    </div>

    <div class="mt-2">
      <h1>{{ movie?.title ? movie?.title : movie?.name }}</h1>
      <div class="flex items-center gap-1 -mt-1">
        <NuxtRating
          :read-only="true"
          :rating-value="4"
          :rating-size="9"
          :rounded-corners="true"
          border-color="#40C1AD"
          active-color="#40C1AD"
          inactive-color="#fff"
          class="mr-1"
        />
        <div class="opacity-60">
          <p>4</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: Object,
  },
  mounted() {},
};
</script>
<style></style>
