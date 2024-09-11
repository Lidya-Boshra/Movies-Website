<script setup>
const tab = ref("overview");
const props = defineProps({
  getData: Object,
});
</script>

<template>
  <div class="flex text-xl items-center justify-center gap-8 py-6 mb-7">
    <button
      :class="{ '!opacity-100 border-b-2 border-white': tab === 'overview' }"
      class="uppercase opacity-40 font-medium pb-3"
      @click="tab = 'overview'"
    >
      Overview
    </button>
    <button
      :class="{ '!opacity-100 border-b-2 border-white': tab === 'videos' }"
      @click="tab = 'videos'"
      class="uppercase opacity-40 font-medium pb-3"
    >
      Videos
    </button>
    <button
      :class="{ '!opacity-100 border-b-2 border-white': tab === 'photos' }"
      @click="tab = 'photos'"
      class="uppercase opacity-40 font-medium pb-3"
    >
      Photos
    </button>
  </div>
  <div class="w-full justify-center mb-12">
    <MediaInfo :getData="props.getData" v-if="tab === 'overview'"/>
  </div>
</template>

<style lang="css"></style>
