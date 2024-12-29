<template>
  <div class="bg-white w-full">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore Apple Watch</span>

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
        <span class="text-gray-600 text-sm">Shop Apple Watch</span>

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
        <span class="text-gray-600 text-sm">Mpre from Apple Watch</span>

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
    link: "Explore All Apple Watch",
  },
  {
    link: "Apple Watch Series 10",
  },
  {
    link: "Apple Watch Ultra 2 ",
  },
  {
    link: "Apple Watch SE",
  },
  {
    link: "Apple Watch Nike",
  },
  {
    link: "Apple Watch Hermes",
  },
];

const quick = [
  {
    link: "Shop Apple Watch",
  },

  { link: "Apple Watch Studio" },
  {
    link: "Apple Watch Bands",
  },
  { link: "Apple Watch Accessories" },
  {
    link: "Apple Trade In",
  },
  {
    link: "Financing",
  },
];

const special = [
  {
    link: "Apple Watch Support ",
  },
  { link: "AppleCare+ " },
  {
    link: "watchOS 11",
  },
  {
    link: "Apple Watch For Your Kids",
  },
  {
    link: "Apps by Apple",
  },
  {
    link: "Apple Fitness+",
  },
];
</script>

<style lang="scss" scoped></style>
