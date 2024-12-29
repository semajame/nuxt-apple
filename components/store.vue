<template>
  <div class="bg-white w-full">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Shop</span>

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
        <span class="text-gray-600 text-sm">Quick Links</span>

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
        <span class="text-gray-600 text-sm">Shop Special Stores</span>

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
    link: "Shop the Latest",
  },
  {
    link: "Mac",
  },
  {
    link: "iPad",
  },
  {
    link: "iPhone",
  },
  {
    link: "Apple Watch",
  },
  {
    link: "Apple Vision Pro",
  },
  {
    link: "Accessories",
  },
];

const quick = [
  {
    link: "Find a Store",
  },
  { link: "Order Status" },
  {
    link: "Apple Trade In",
  },
  {
    link: "Financing",
  },
];

const special = [
  {
    link: "Certified Refurbished",
  },
  { link: "Education" },
  {
    link: "Business",
  },
  {
    link: "Veterans and Military",
  },
  {
    link: "Government",
  },
];
</script>

<style lang="scss" scoped></style>
