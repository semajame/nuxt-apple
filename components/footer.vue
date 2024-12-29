<template>
  <footer class="bg-gray-100 mx-auto py-5 px-4">
    <div class="text-sm flex flex-col gap-3 text-gray-500 leading-5">
      <p>
        1. Hearing Aid and Hearing Test: The Hearing Aid feature has received
        FDA authorization. The Hearing Test and Hearing Aid features are
        supported on AirPods Pro 2 with the latest firmware paired with a
        compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are
        intended for people 18 years old or older. The Hearing Aid feature is
        also supported on a compatible Mac with macOS Sequoia and later. It is
        intended for people with perceived mild to moderate hearing loss.
      </p>
      <p>
        Hearing Protection: The Hearing Protection feature works with AirPods
        Pro 2 with the latest firmware when paired with a compatible iPhone,
        iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature
        is only available in the U.S. and Canada. See support.apple.com/120850
        for total attenuation and more information. The Hearing Protection
        feature is not suitable for protection against extremely loud impulse
        sounds, such as gunfire, fireworks, or jackhammers, or against sustained
        sounds louder than 110 dBA.
      </p>
      <p>
        2. Available in two models: AirPods 4 and AirPods 4 with Active Noise
        Cancellation.
      </p>
      <p>
        3. Trade‑in values will vary based on the condition, year, and
        configuration of your eligible trade‑in device. Not all devices are
        eligible for credit. You must be at least the age of majority to be
        eligible to trade in for credit or for an Apple Gift Card. Trade‑in
        value may be applied toward qualifying new device purchase, or added to
        an Apple Gift Card. Actual value awarded is based on receipt of a
        qualifying device matching the description provided when estimate was
        made. Sales tax may be assessed on full value of a new device purchase.
        In‑store trade‑in requires presentation of a valid photo ID (local law
        may require saving this information). Offer may not be available in all
        stores, and may vary between in‑store and online trade‑in. Some stores
        may have additional requirements. Apple or its trade‑in partners reserve
        the right to refuse, cancel, or limit quantity of any trade‑in
        transaction for any reason. More details are available from Apple’s
        trade-in partner for trade‑in and recycling of eligible devices.
        Restrictions and limitations may apply.
      </p>
      <p>
        Apple Intelligence is available in beta on all iPhone 16 models, iPhone
        15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models
        with M1 and later, with Siri and device language set to English
        (Australia, Canada, Ireland, New Zealand, South Africa, UK, or U.S.), as
        part of an iOS 18, iPadOS 18, and macOS Sequoia software update.
        Additional features and languages will be available in April, with more
        languages coming over the course of the year. Languages supported in
        2025 include Chinese, English (India, Singapore), French, German,
        Italian, Japanese, Korean, Portuguese, Spanish, and Vietnamese.
      </p>
      <p>
        A subscription is required for Apple Arcade, Apple Fitness+, Apple
        Music, and Apple TV+.
      </p>
      <p>
        Features are subject to change. Some features, applications, and
        services may not be available in all regions or all languages.
      </p>
    </div>
    <hr class="mt-5 border-gray-400" />

    <!-- DESKTOP NAV -->
    <nav class="hidden md:grid md:items-start md:grid-cols-6">
      <div
        v-for="(category, categoryName) in appleCategories"
        :key="categoryName"
      >
        <div class="my-4">
          <div>
            <h2 class="text-gray-700 text-xs font-bold">
              {{ formatCategoryName(categoryName) }}
            </h2>
            <div>
              <ul class="flex flex-col gap-1 mt-2">
                <li v-for="(links, index) in category" :key="index">
                  <NuxtLink
                    to="/"
                    class="text-xs text-gray-700 hover:underline"
                  >
                    {{ links.link }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- MOBILE NAV -->
    <nav class="flex flex-col md:hidden my-5">
      <div
        v-for="(category, categoryName) in appleCategories"
        :key="categoryName"
        class="collapse collapse-arrow bg-transparent text-black border-b-black"
      >
        <input type="radio" name="my-accordion-2" class="border-b-black" />
        <div class="collapse-title text-sm font-medium">
          {{ formatCategoryName(categoryName) }}
        </div>
        <div class="collapse-content">
          <ul class="flex flex-col gap-1 mt-2">
            <li v-for="(links, index) in category" :key="index">
              <NuxtLink
                to="/"
                class="text-sm text-gray-700 hover:underline pl-2"
              >
                {{ links.link }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div>
      <p class="text-xs text-gray-500">
        More ways to shop:
        <NuxtLink to="/" class="text-sky-700 underline"
          >Find an Apple Store</NuxtLink
        >
        or
        <NuxtLink to="/" class="text-sky-700 underline"
          >other retailer</NuxtLink
        >
        near you. Or call 1-800-MY-APPLE.
      </p>
    </div>
    <hr class="mt-5 border-gray-400" />
    <div
      class="md:flex md:justify-between md:flex-row md:items-center mt-4 flex flex-col gap-2"
    >
      <div class="md:flex md:gap-10 md:flex-row flex flex-col gap-2">
        <p class="text-xs text-gray-500">
          Copyright {{ year }} Apple Inc. All rights reserved.
        </p>

        <div>
          <ul class="md:flex md:gap-2 text-xs text-gray-600 flex gap-3">
            <li>
              <NuxtLink to="/" class="hover:underline">
                Privacy Policy</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="hover:underline"> Terms of Use </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="hover:underline">
                Sales and Refunds</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="hover:underline"> Legal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="hover:underline"> Sitemap</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p class="text-xs text-gray-700">United States</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const appleCategories = {
  shop: [
    { link: "Store" },
    { link: "Mac" },
    { link: "iPad" },
    { link: "iPhone" },
    { link: "Watch" },
    { link: "Vision" },
    { link: "AirPods" },
    { link: "TV & Home" },
    { link: "AirTag" },
  ],
  wallet: [
    { link: "Wallet" },
    { link: "Apple Card" },
    { link: "Apple Pay" },
    { link: "Apple Cash" },
  ],
  account: [
    { link: "Manage Your Apple Account" },
    { link: "Apple Store Account" },
    { link: "iCloud.com" },
  ],
  entertainment: [
    { link: "Apple One" },
    { link: "Apple TV+" },
    { link: "Apple Music" },
    { link: "Apple Arcade" },
    { link: "Apple Fitness+" },
    { link: "Apple News+" },
    { link: "Apple Podcasts" },
    { link: "Apple Books" },
    { link: "Apple Store" },
  ],
  appleStore: [
    { link: "Find a Store" },
    { link: "Genius Bar" },
    { link: "Today at Apple" },
    { link: "Group Reservations" },
    { link: "Apple Camp" },
    { link: "Apple Store App" },
    { link: "Certified Refurbished" },
    { link: "Apple Trade In" },
    { link: "Financing" },
    { link: "Career Deals at Apple" },
    { link: "Order Status" },
    { link: "Shopping Help" },
  ],
  business: [{ link: "Apple and Business" }, { link: "Shop for Business" }],
  education: [
    { link: "Apple and Education" },
    { link: "Shop for K-12" },
    { link: "Shop for College" },
  ],
  healthcare: [
    { link: "Apple and Healthcare" },
    { link: "Mac in Healthcare" },
    { link: "Health on Apple Watch" },
    { link: "Health Records on iPhone and iPad" },
  ],
  government: [
    { link: "Shop for Government" },
    { link: "Shop for Veterans and Military" },
  ],
  appleValues: [
    { link: "Accessibility" },
    { link: "Education" },
    { link: "Government" },
    { link: "Inclusion and Diversity" },
    { link: "Privacy" },
    { link: "Racial Equality and Justice" },
    { link: "Supply Chain" },
  ],
  aboutApple: [
    { link: "Newsroom" },
    { link: "Apple Leadership" },
    { link: "Career Opportunities" },
    { link: "Investors" },
    { link: "Ethics & Compliance" },
    { link: "Events" },
    { link: "Contact Apple" },
  ],
};

// Function to format the category name into readable format
const formatCategoryName = (categoryName) => {
  return categoryName
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const year = new Date().getFullYear();
</script>
