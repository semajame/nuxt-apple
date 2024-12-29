<template>
  <div class="pt-10 flex flex-col gap-3 max-w-screen-2xl mx-auto">
    <main class="relative h-screen">
      <div class="absolute inset-0 w-full h-full">
        <picture>
          <source
            srcset="
              https://www.apple.com/v/home/bx/images/heroes/holiday-2024-still-time/hero_holiday_2024_still_time__fof6z4yuswyi_large.jpg
            "
            media="(min-width: 768px)"
          />
          <img
            src="https://www.apple.com/v/home/bx/images/heroes/holiday-2024-still-time/hero_holiday_2024_still_time__fof6z4yuswyi_small_2x.jpg"
            alt="responsive hero img"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div
        class="flex justify-center items-center flex-col gap-3 pt-10 relative z-20"
      >
        <h1
          class="font-semibold md:text-6xl text-4xl text-center max-w-xl py-2"
        >
          There's still time to work your magic.
        </h1>
        <p class="text-gray-800 md:text-2xl text-xl">
          Wrap your holiday gift list.
        </p>
        <NuxtLink
          to="/"
          class="bg-sky-600 text-white py-2 px-5 rounded-full inline-block text-sm md:text-md"
        >
          Shop Gifts
        </NuxtLink>
      </div>
    </main>

    <section>
      <div class="h-screen relative">
        <div class="absolute inset-0 w-full h-full">
          <picture>
            <source
              srcset="
                https://www.apple.com/v/home/bx/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium_2x.jpg
              "
              media="(min-width: 768px)"
            />
            <img
              src="https://www.apple.com/v/home/bx/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_small_2x.jpg"
              alt="mobile iphone img"
              class="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div
          class="flex justify-end items-center flex-col gap-3 h-full pb-10 relative z-20 md:justify-start md:pt-20"
        >
          <div class="flex flex-col gap-2 text-center">
            <h1
              class="font-semibold md:text-6xl text-4xl text-center text-white"
            >
              iPhone 16 Pro
            </h1>
            <p class="md:text-2xl text-md text-white">
              Hello, Apple Intelligence.
            </p>
            <div class="flex gap-4 justify-center">
              <NuxtLink
                to="/"
                class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
              >
                Learn more
              </NuxtLink>
              <NuxtLink
                to="/"
                class="bg-transparent text-sky-600 border-sky-600 border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white"
              >
                Buy
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="h-screen relative">
        <div class="absolute inset-0 w-full h-full">
          <picture>
            <source
              srcset="
                https://www.apple.com/v/home/bx/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_medium.jpg
              "
              media="(min-width: 768px)"
            />
            <img
              src="https://www.apple.com/v/home/bx/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_small.jpg"
              alt="mobile iphone image"
              class="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div
          class="flex items-center flex-col gap-3 h-full pb-10 relative z-20 justify-start pt-20"
        >
          <div class="flex flex-col gap-2 text-center">
            <h1
              class="font-semibold md:text-6xl text-4xl text-center text-white"
            >
              iPhone 16 Pro
            </h1>
            <p class="md:text-2xl text-md text-white">
              Hello, Apple Intelligence.
            </p>
            <div class="flex gap-4 justify-center">
              <NuxtLink
                to="/"
                class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
              >
                Learn more
              </NuxtLink>
              <NuxtLink
                to="/"
                class="bg-transparent text-white border-white border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white hover:border-sky-600"
              >
                Buy
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grid md:grid-cols-2 gap-3 px-3">
      <div
        class="bg-[url('https://www.apple.com/v/home/bx/images/promos/ipad-air/promo_ipadair_ai__3fv1eitzqv6y_medium.jpg')] bg-no-repeat h-[550px] w-full bg-cover bg-[center_5%]"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <div>
            <img
              src="https://www.apple.com/v/home/bx/images/logos/ipad-air/promo_logo_ipadair_ai__gikal75essya_medium.png"
              alt="Ipad Air logo"
            />
          </div>
          <p class="text-xl text-black">Two sizes. Faster Chip. Does it all.</p>
          <div class="flex gap-4">
            <NuxtLink
              to="/"
              class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
            >
              Learn more
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-transparent text-sky-600 border-sky-600 border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white"
            >
              Buy
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="bg-[url('https://www.apple.com/v/home/bx/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_medium.jpg')] bg-no-repeat h-[550px] bg-cover"
      >
        <div class="flex justify-end items-center flex-col gap-3 h-full pb-10">
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-5xl text-center text-white">
              AirPods Pro 2
            </h1>
            <p class="text-xl text-white">Now with a Hearing Aid feature.</p>
            <div class="flex gap-4 justify-center">
              <NuxtLink
                to="/"
                class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
              >
                Learn more
              </NuxtLink>
              <NuxtLink
                to="/"
                class="bg-transparent text-sky-600 border-sky-600 border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white"
              >
                Buy
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-[url('https://www.apple.com/v/home/bx/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_medium.jpg')] bg-no-repeat h-[550px] bg-cover bg-center"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <div>
            <img
              src="https://www.apple.com/v/home/bx/images/logos/apple-watch-series-10/promo_logo_apple_watch_series_10__qk5vaa89vnm2_medium.png"
              alt="Apple Watch Series Logo"
            />
          </div>
          <p class="text-xl text-black">Thinstant classic.</p>
          <div class="flex gap-4">
            <NuxtLink
              to="/"
              class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
            >
              Learn more
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-transparent text-sky-600 border-sky-600 border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white"
            >
              Buy
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="bg-[url('https://www.apple.com/v/home/bx/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg')] bg-no-repeat h-[550px] bg-cover bg-center"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <h1 class="font-semibold text-5xl text-center text-black">
            MacBook Air
          </h1>
          <p class="text-xl text-black">Lean, Mean, M3 machine.</p>
          <div class="flex gap-4">
            <NuxtLink
              to="/"
              class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
            >
              Learn more
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-transparent text-sky-600 border-sky-600 border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white"
            >
              Buy
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="bg-[url('https://www.apple.com/v/home/bx/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg')] bg-no-repeat h-[550px] bg-cover bg-[center_50%]"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <h1 class="font-semibold text-5xl text-center text-white">
            <img
              src="https://www.apple.com/v/home/bx/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium.png"
              alt="Tradein Logo"
            />
          </h1>
          <p class="text-lg text-black text-center max-w-80">
            Get $180–$650 in credit when you trade in iPhone 12 or higher.
          </p>
          <div class="flex gap-4">
            <NuxtLink
              to="/"
              class="bg-sky-600 text-white px-5 py-2 rounded-full text-sm"
            >
              Get your estimate
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="bg-[url('https://www.apple.com/v/home/bx/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium.jpg')] bg-no-repeat h-[550px] bg-cover bg-[center_50%]"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <div>
            <img
              src="https://www.apple.com/v/home/bx/images/logos/apple-card/logo__dcojfwkzna2q_large.png"
              alt="Card Logo"
            />
          </div>
          <p class="text-lg text-black text-center max-w-80">
            Get up to 3% Daily Cash back with every purchase.
          </p>
          <div class="flex gap-4">
            <NuxtLink
              to="/"
              class="bg-sky-600 text-white px-5 py-1 rounded-full text-sm"
            >
              Learn more
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-transparent text-sky-600 border-sky-600 border py-1 px-5 rounded-full hover:bg-sky-600 hover:text-white"
            >
              Apply now
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Carousel />

    <!-- <Carousel /> -->
  </div>
</template>
