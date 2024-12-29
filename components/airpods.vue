<template>
  <div class="bg-white w-full pb-10">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore AirPods</span>

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
        <span class="text-gray-600 text-sm">Shop AirPods</span>

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
        <span class="text-gray-600 text-sm">More from AirPods</span>

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
    link: "Explore Apple AirPods Pro",
  },
  {
    link: "AirPods 4",
  },
  {
    link: "AirPods Pro 2",
  },
  {
    link: "AirPods Max",
  },
];

const quick = [
  {
    link: "Shop AirPods",
  },
  { link: "AirPods Accessories" },
];

const special = [
  {
    link: "AirPods Support  ",
  },
  { link: "AppleCare+ for Headphones" },
  {
    link: "Hearing Health",
  },
  {
    link: "Apple Music",
  },
];
</script>

<style lang="scss" scoped></style>
