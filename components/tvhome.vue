<template>
  <div class="bg-white w-full pb-10">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore TV & Home</span>

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
        <span class="text-gray-600 text-sm">Shop TV & Home</span>

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
      <div>
        <span class="text-gray-600 text-sm">More from TV & Home</span>

        <div class="flex flex-col gap-2 justify-center mt-2">
          <NuxtLink
            to="/"
            v-for="(links, index) in special"
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
    link: "Explore TV & Home Pro",
  },
  {
    link: "Apple TV 4K",
  },
  {
    link: "HomePod  ",
  },
  {
    link: "HomePod mini",
  },
];

const quick = [
  {
    link: "Shop Apple TV 4K",
  },
  { link: "Shop HomePod" },
  {
    link: "Shop HomePod mini",
  },
  { link: "Shop Siri Remote" },
  {
    link: "TV & Home Accessories",
  },
];

const special = [
  {
    link: "Apple TV Support  ",
  },
  { link: "HomePod Support " },
  {
    link: "AppleCare+",
  },
  {
    link: "Apple TV app",
  },
  {
    link: "Apple TV+",
  },
  {
    link: "Home app",
  },
  {
    link: "Apple Music",
  },
  {
    link: "Siri",
  },
  {
    link: "AirPlay",
  },
];
</script>

<style lang="scss" scoped></style>
