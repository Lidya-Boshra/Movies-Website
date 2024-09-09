<template>
  <div class="flex">
    <div
      class="p-5 !bg-black text-white text-2xl w-[70px] h-screen border-r border-gray-600"
    >
      <div class="text-white flex flex-col gap-20 text-3xl justify-center h-full">
        <iconsHome class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
        <iconsMovie class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
        <iconsTV class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
        <iconsSearch class="cursor-pointer hover:text-[#40C1AD] duration-500"/>
      </div>
    </div>
    <div class="w-full bg-black text-white min-h-screen">
      <slot />
    </div>
  </div>
</template>
