<template>
  <div class="bg-white w-full">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore iPad</span>

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
        <span class="text-gray-600 text-sm">Shop iPad</span>

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
        <span class="text-gray-600 text-sm">More from iPad</span>

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
    link: "Explore All iPad",
  },
  {
    link: "iPad Air",
  },
  {
    link: "iPad Pro",
  },
  {
    link: "iPad",
  },
  {
    link: "iPad mini",
  },
  {
    link: "Apple Pencil",
  },
  {
    link: "Keyboards",
  },
];

const quick = [
  {
    link: "Shop iPad",
  },
  { link: "iPad Accessories" },

  {
    link: "Apple Trade In",
  },
  {
    link: "Financing",
  },
];

const special = [
  {
    link: "iPad Support ",
  },
  { link: "AppleCare+ for iPad" },
  {
    link: "iPadOS 18",
  },
  {
    link: "Apple Intelligence",
  },
  {
    link: "Apps by Apple",
  },
  {
    link: "Continuity",
  },
  {
    link: "iCloud+",
  },
  {
    link: "iPad for Business",
  },
  {
    link: "Education",
  },
];
</script>

<style lang="scss" scoped></style>
