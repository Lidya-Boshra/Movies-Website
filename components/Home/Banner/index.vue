<template>
  <div class="w-full h-[75vh] relative">
    <div class="flex justify-end w-full h-full">
      <img
        :src="
          'https://image.tmdb.org/t/p/original/' +
          movieData.results[0].backdrop_path
        "
        alt="cover image"
        class="h-full w-[70%] object-cover"
      />
    </div>
    <div class="absolute left-0 top-0 h-full layer-div">
      <div class="h-full flex flex-col justify-center gap-4 pl-24">
        <h1 class="text-5xl">{{ movieData.results[0].title }}</h1>
        <div class="flex items-center gap-1">
          <NuxtRating
            :read-only="true"
            :rating-value="4"
            :rating-size="12"
            :rounded-corners="true"
            border-color="#40C1AD"
            active-color="#40C1AD"
            inactive-color="#fff"
            class="mt-1 mr-2"
          />
          <div class="opacity-60 flex gap-2">
            <p>4</p>
            <p>.</p>
            <p>2.7K Reviews</p>
            <p>.</p>
            <p>2024</p>
            <p>.</p>
            <p>2h 8min</p>
          </div>
        </div>
        <p class="opacity-80 max-w-[53%]">
          {{ movieData.results[0].overview }}
        </p>
        <div class="flex items-center mt-3 px-5">
          <iconsPlay class="text-[43px]" />
          <button class="text-left">Watch Trailer</button>
        </div>
      </div>
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

<style>
.layer-div {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 30%,
    transparent 100%
  );
  width: 100%;
}
</style>
