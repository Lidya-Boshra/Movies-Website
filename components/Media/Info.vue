<script setup>
const props = defineProps({
  getData: Object,
});
</script>

<template>
  <div class="flex items-center w-full gap-10 justify-center px-32">
    <MediaCard :getData="props.getData" allDetails="false" />

    <!-- <div class="flex justify-center">
      <div
        class="border-4 border-[#1F2021] w-[308px] h-[498px] hover:scale-105 duration-300"
      >
        <img
          src="~/assets/test1.jpg"
          alt="poster image"
          class="w-full h-full"
        />
      </div>
    </div> -->
    <div class="flex flex-col gap-6 max-w-max">
      <h3 class="text-3xl mb-4">{{ props?.getData?.title }}</h3>
      <p class="w-[62%] opacity-80">
        {{ props?.getData?.overview }}
      </p>
      <div class="flex text-sm opacity-80 gap-24">
        <div class="flex gap-3">
          <div class="flex flex-col gap-4">
            <p class="p-1">Released</p>
            <p class="p-1">Director</p>
            <p class="p-1">Genre</p>
            <p class="p-1">Language</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="p-1">{{ props?.getData?.release_date }}</p>
            <p class="bg-[#1D1E1E] p-1 px-2 rounded w-fit">John woo</p>
            <div class="flex items-center text-center w-full gap-1">
              <p
                class="bg-[#1D1E1E] p-1 px-2 rounded min-w-max"
                v-for="genre in props?.getData?.genres.slice(0, 3)"
              >
                {{ genre?.name }}
              </p>
            </div>
            <p class="p-1">English</p>
          </div>
        </div>

        <div class="flex gap-3">
          <div class="flex flex-col gap-4">
            <p class="p-1">Runtime</p>
            <p class="p-1">Budget</p>
            <p class="p-1">Status</p>
            <p class="p-1">Production</p>
          </div>

          <div class="flex flex-col gap-4">
            <p class="p-1">
              {{ Math.round(props?.getData?.runtime / 60) }}hr
              {{ props?.getData?.runtime % 60 }}min
            </p>
            <p class="p-1">${{ props?.getData?.budget }}</p>
            <p class="p-1">{{ props?.getData?.status }}</p>
            <p class="w-[55%] p-1">
              Universal Pictures, Atlas Entertainment, A Better Tomorrow Films,
              Entertainment One
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
