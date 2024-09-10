<template>
  <div class="flex relative">
    <div
      class="p-5 !bg-black fixed text-white text-2xl w-[70px] h-screen border-r border-[#9ca3af33]"
    >
      <div class="text-white flex flex-col gap-[100px] text-3xl justify-center h-full">
        <iconsHome class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
        <iconsMovie class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
        <iconsTV class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
        <iconsSearch class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
      </div>
    </div>
    <div class="bg-[#111111] text-white relative left-[70px] min-h-screen h-full"
    :style="{ width: `calc(100% - 70px)` }"

    >
      <slot />
    </div>
  </div>
</template>
