<template>
  <div class="bg-white w-full pb-10">
    <nav class="flex justify-start items-start gap-10 pl-[11rem] pt-5">
      <div class="pb-10">
        <span class="text-gray-600 text-sm">Explore Support</span>

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
        <span class="text-gray-600 text-sm">Get Help</span>

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
        <span class="text-gray-600 text-sm">Helpful Topics</span>

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
    link: "iPhone",
  },
  {
    link: "Mac",
  },
  {
    link: "iPad  ",
  },
  {
    link: "Watch",
  },
  {
    link: "Apple Vision Pro",
  },
  {
    link: "AirPods",
  },
  {
    link: "Music  ",
  },
  {
    link: "TV",
  },
];

const quick = [
  {
    link: "Community",
  },
  { link: "Check Coverage" },
  {
    link: "Repair",
  },
];

const special = [
  {
    link: "Get AppleCare+  ",
  },
  { link: "Apple Account and Password " },
  {
    link: "Billing & Subscriptions",
  },
  {
    link: "Accessibility",
  },
];
</script>

<style lang="scss" scoped></style>
