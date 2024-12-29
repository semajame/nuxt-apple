<template>
  <section>
    <div class="carousel carousel-center w-full gap-3" ref="carousel">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel-item md:max-w-[800px] max-w-[400px] relative"
        :id="`item${index + 1}`"
      >
        <NuxtImg
          :src="item.image"
          :alt="item.alt"
          class="w-full h-auto"
          densities="x1"
          format="webp"
        />
        <div
          class="absolute md:bottom-8 bottom-4 md:left-10 left-5 flex gap-4 items-center"
        >
          <NuxtLink
            to="/"
            class="bg-white text-black py-2 px-4 rounded-full text-sm md:text-md"
            >Stream Now</NuxtLink
          >
          <p class="text-white md:text-md text-sm">
            <span class="font-bold md:text-md text-sm">{{ item.genre }}</span
            >- {{ item.parag }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center py-2 gap-4">
      <a
        v-for="(item, index) in carouselItems"
        :key="index"
        :href="`#item${index + 1}`"
        class="w-2 h-2 rounded-btn bg-gray-400 border-none border"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
        :aria-label="item.label"
      >
        &nbsp;
      </a>
    </div>
    <div
      class="carousel-container overflow-hidden relative w-full h-[200px] mb-10 mt-5"
    >
      <div
        ref="carousel"
        class="carousel flex items-center w-max gap-3 transition-transform"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <div
          v-for="(item, index) in carouselVisible"
          :key="index"
          class="carousel-item flex-none w-[400px] h-[200px] relative"
        >
          <NuxtImg
            :src="item.image"
            alt="Carousel Image"
            densities="x1"
            format="webp"
            class="object-cover w-full h-auto"
          />

          <div class="absolute bottom-8 left-10 flex gap-4 items-center">
            <NuxtLink
              to="/"
              class="bg-white text-black py-2 px-4 rounded-full text-sm"
              >{{ item.button }}</NuxtLink
            >
            <p class="text-white text-sm">- {{ item.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Carousel items

const carouselItems = ref([
  {
    image: "/img/pressumed.jpg",
    genre: "Crime ",
    parag: "Pressume nothing.",
    alt: "Pressumed Innocent Image",
    label: "Item 1",
  },
  {
    image: "/img/severance.jpg",
    genre: "Thriller ",
    parag: "Cath up now. New season.",
    alt: "Severance Image",
    label: "Item 2",
  },
  {
    image: "/img/shrinking.jpg",
    genre: "Comedy ",
    parag: "Breakdown. Breakthrough",
    alt: "Shrinking Image",
    label: "Item 3",
  },
  {
    image: "/img/fly.jpg",
    genre: "Comedy ",
    parag: "Will they make history?",
    alt: "Fly me to the moon Image",
    label: "Item 4",
  },
  {
    image: "/img/slow.jpg",
    genre: "Thriller ",
    parag: "Emmy Award winner.",
    alt: "Slow horses Image",
    label: "Item 5",
  },
  {
    image: "/img/ted.jpg",
    genre: "Comedy ",
    parag: "Kindess makes a comeback",
    alt: "Ted Lasso Image",
    label: "Item 6",
  },
]);

const carouselImage = ref([
  {
    image: "/img/meditate.jpg",
    button: "Watch Now",
    paragraph: "Calm Meditation with Visualization",
  },
  {
    image: "/img/kitty.jpg",
    button: "Play Now",
    paragraph: "Hello Kitty Island Adventure ",
  },
  {
    image: "/img/nba.jpg",
    button: "Play Now",
    paragraph: "NBA 2k2025 ",
  },
  {
    image: "/img/yoga.jpg",
    button: "Play Now",
    paragraph: "Yoga with Jonelle ",
  },
]);

const currentSlide = ref(0); // Track the current slide
const translateX = ref(0);
const speed = 1; // Speed of scrolling in pixels per frame

let animationFrameId = null;

// const visibleItems = computed(() => {
//   // Access carousel.value to ensure it's iterable
//   return [...carouselItems.value, ...carouselItems.value];
// });

const carouselVisible = computed(() => {
  return [...carouselImage.value, ...carouselImage.value];
});

// Animation function to move the carousel
const animateCarousel = () => {
  translateX.value -= speed;

  // Reset the position when the first set of items is completely out of view
  if (Math.abs(translateX.value) >= carouselItems.value.length * 600) {
    translateX.value = 0;
  }

  animationFrameId = requestAnimationFrame(animateCarousel);
};

// Set up animation for infinite scrolling
onMounted(() => {
  animationFrameId = requestAnimationFrame(animateCarousel);
});

// Clear animation frame on component unmount
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});

// Handle manual navigation
const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>

<style>
.active {
  background-color: rgb(19, 19, 19); /* Adjust as per your theme */
}

.carousel {
  display: flex;
  will-change: transform;
}
</style>
