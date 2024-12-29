<template>
  <div class="bg-white w-full">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore iPhone</span>

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
        <span class="text-gray-600 text-sm">Shop iPhone</span>

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
        <span class="text-gray-600 text-sm">Mpre from iPhone</span>

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
    link: "Explore All iPhone",
  },
  {
    link: "iPhone 16 Pro",
  },
  {
    link: "iPhone 16 ",
  },
  {
    link: "iPhone 16",
  },
  {
    link: "iPhone 15",
  },
  {
    link: "iPhone 14",
  },
  {
    link: "iPhone SE",
  },
];

const quick = [
  {
    link: "Shop iPhone",
  },

  { link: "iPhone Accessories" },
  {
    link: "Apple Trade In",
  },
  { link: "Carrier Deals at Apple" },
  {
    link: "Financing",
  },
];

const special = [
  {
    link: "iPhone Support ",
  },
  { link: "AppleCare+ for iPhone" },
  {
    link: "iOS 18",
  },
  {
    link: "Apple Intelligence",
  },
  {
    link: "Apps by Apple",
  },
  {
    link: "iPhone Privacy",
  },
  {
    link: "iCloud+",
  },
  {
    link: "Wallet, Pay, Card",
  },
  {
    link: "Siri",
  },
];
</script>

<style lang="scss" scoped></style>
