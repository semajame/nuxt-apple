<template>
  <div class="bg-white w-full pb-10">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Shop Accessories</span>

        <div class="flex flex-col gap-2 justify-center mt-2">
          <NuxtLink
            to="/"
            v-for="(links, index) in shop"
            :key="index"
            class="text-xl text-gray-950 font-bold hover:underline"
          >
            {{ links.link }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <span class="text-gray-600 text-sm">Explore Accessories</span>

        <div class="flex flex-col gap-2 justify-center mt-2">
          <NuxtLink
            to="/"
            v-for="(links, index) in quick"
            :key="index"
            class="text-xs text-gray-950 font-bold hover:underline"
          >
            {{ links.link }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const shop = [
  {
    link: "Shop All Accessories",
  },
  {
    link: "Mac",
  },
  {
    link: "iPad ",
  },
  {
    link: "iPhone ",
  },
  {
    link: "Apple Watch ",
  },
  {
    link: "Apple Watch Pro",
  },
  {
    link: "AirPods",
  },
  {
    link: "TV & Home ",
  },
];

const quick = [
  {
    link: "Made by Apple",
  },
  { link: "Beats by Dr.Dre" },
  { link: "AirTag" },
];
</script>

<style lang="scss" scoped></style>
