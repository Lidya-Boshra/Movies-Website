<template>
  <div class="cursor-pointer">
    <NuxtLink :to="routeURL">
      <div
        class="border-4 border-[#1F2021] w-[240px] h-[376px] hover:scale-105 duration-300"
        v-if="getData?.poster_path"
      >
        <img
          :src="'https://image.tmdb.org/t/p/original/' + getData?.poster_path"
          alt="poster image"
          class="w-full h-full"
        />
      </div>
      <div
        class="border-4 border-[#1F2021] w-[240px] h-[376px] hover:scale-105 duration-300"
        v-if="from == 'cast'"
      >
        <img
          :src="'https://image.tmdb.org/t/p/original/' + getData?.profile_path"
          alt="poster image"
          class="w-full h-full"
        />
      </div>
    </NuxtLink>
    <div class="mt-2" v-if="allDetails == true">
      <h1>{{ getData?.title || getData?.name }}</h1>
      <div class="flex items-center gap-1 -mt-1">
        <NuxtRating
          :read-only="true"
          :rating-value="(((getData?.vote_average * 10) / 100) * 5)?.toFixed(1)"
          :rating-size="9"
          :rounded-corners="true"
          border-color="#40C1AD"
          active-color="#40C1AD"
          inactive-color="#fff"
          class="mr-1"
        />
        <div class="opacity-60">
          <p>{{ getData?.vote_average?.toFixed(1) }}</p>
        </div>
      </div>
    </div>
    <div class="mt-2" v-if="from == 'cast'">
      <h1>{{ getData?.original_name }}</h1>
      <h2 class="text-sm opacity-70">{{ getData?.character }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    getData: Object,
    routeURL: String,
    allDetails: {
      type: Boolean,
      default: true,
    },
    from: String,
  },
  mounted() {},
};
</script>
<style></style>
