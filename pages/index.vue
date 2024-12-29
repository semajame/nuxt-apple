<template>
  <div class="pt-10 flex flex-col gap-3 max-w-screen-2xl mx-auto">
    <main class="relative h-screen">
      <div class="absolute inset-0 w-full h-full">
        <picture>
          <source srcset="/img/bag-big.jpg" media="(min-width: 768px)" />
          <NuxtImg
            src="/img/bag-small.jpg"
            alt="responsive hero img"
            densities="x1"
            format="webp"
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
              srcset="/img/bronze-iphone-small.jpg"
              media="(min-width: 768px)"
            />
            <NuxtImg
              src=" /img/bronze-iphone-stand.jpg"
              alt="mobile iphone img"
              densities="x1"
              format="webp"
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
              srcset="/img/blue-iphone-big.jpg"
              media="(min-width: 768px)"
            />
            <NuxtImg
              src=" /img/blue-iphone-stand.jpg"
              alt="mobile iphone image"
              format="webp"
              densities="x1"
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
        class="bg-[url('/img/ipad.jpg')] bg-no-repeat h-[550px] w-full bg-cover bg-[center_5%]"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <div>
            <NuxtImg
              src="/img/ipad-air-logo.png"
              alt="Ipad Air logo"
              format="webp"
              densities="x1"
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
      <div class="bg-[url('/img/airpods.jpg')] bg-no-repeat h-[550px] bg-cover">
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
        class="bg-[url('/img/watch.jpg')] bg-no-repeat h-[550px] bg-cover bg-center"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <div>
            <img src="/img/watch-logo.png" alt="Apple Watch Series Logo" />
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
        class="bg-[url('/img/imac.jpg')] bg-no-repeat h-[550px] bg-cover bg-center"
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
        class="bg-[url('/img/iphone-trade.jpg')] bg-no-repeat h-[550px] bg-cover bg-[center_50%]"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <h1 class="font-semibold text-5xl text-center text-white">
            <NuxtImg
              src="/img/trade-in.png"
              alt="Tradein Logo"
              densities="x1"
              format="webp"
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
        class="bg-[url('/img/card.jpg')] bg-no-repeat h-[550px] bg-cover bg-[center_50%]"
      >
        <div class="flex justify-center items-center flex-col gap-3 pt-10">
          <div>
            <NuxtImg
              src="/img/card-logo.jpg"
              alt="Card Logo"
              densities="x1"
              format="webp"
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
