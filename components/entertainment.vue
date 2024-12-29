<template>
  <div class="bg-white w-full pb-10">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore Entertainment</span>

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
        <span class="text-gray-600 text-sm">Support</span>

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
    link: "Explore Entertainment",
  },
  {
    link: "Apple One",
  },
  {
    link: "Apple TV+",
  },
  {
    link: "Apple Music",
  },
  {
    link: "Apple Arcade",
  },
  {
    link: "Apple Fitness+",
  },
  {
    link: "Apple News+",
  },
  {
    link: "Apple Podcasts",
  },
  {
    link: "Apple Books",
  },
  {
    link: "App Store",
  },
];

const quick = [
  {
    link: "Apple TV+ Support",
  },
  { link: "Apple Music Support" },
];
</script>

<style lang="scss" scoped></style>
