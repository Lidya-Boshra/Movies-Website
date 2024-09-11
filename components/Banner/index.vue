<template>
  <div class="w-full h-[75vh] relative">
    <div class="flex justify-end w-full h-full">
      <img
        :src="'https://image.tmdb.org/t/p/original/' + movieData?.backdrop_path"
        alt="cover image"
        class="h-full w-[70%] object-cover"
      />
    </div>
    <div class="absolute left-0 top-0 h-full layer-div">
      <div class="h-full flex flex-col justify-center gap-4 pl-24">
        <h1 class="text-5xl">{{ movieData?.title }}</h1>
        <div class="flex items-center gap-1">
          <NuxtRating
            :read-only="true"
            :rating-value="
              (((movieData?.vote_average * 10) / 100) * 5)?.toFixed(1)
            "
            :rating-size="12"
            :rounded-corners="true"
            border-color="#40C1AD"
            active-color="#40C1AD"
            inactive-color="#fff"
            class="mt-1 mr-2"
          />
          <div class="opacity-60 flex gap-2">
            <p>{{ movieData?.vote_average?.toFixed(1) }}</p>
            <p>.</p>
            <p>{{ movieData?.vote_count }} Reviews</p>
            <p>.</p>
            <p>{{ movieData?.release_date?.split("-")[0] }}</p>
            <p>.</p>
            <p>2h 8min</p>
          </div>
        </div>
        <p class="opacity-80 max-w-[53%]">
          {{ movieData?.overview }}
        </p>
        <NuxtLink :to="`/movie/${movieData?.id}`">
          <div class="flex items-center mt-3 px-5">
            <iconsPlay class="text-[43px]" />
            <button class="text-left">Watch Trailer</button>
          </div>
        </NuxtLink>
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
