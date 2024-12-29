<template>
  <section>
    <div class="carousel carousel-center w-full gap-3" ref="carousel">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel-item max-w-[800px] relative"
        :id="`item${index + 1}`"
      >
        <NuxtImg
          :src="item.image"
          :alt="item.alt"
          class="w-full h-auto"
          sizes="100vw sm:50vw md:400px xs:50vw"
          densities="x1 x2"
          format="webp"
        />
        <div class="absolute bottom-8 left-10 flex gap-4 items-center">
          <NuxtLink
            to="/"
            class="bg-white text-black py-2 px-4 rounded-full text-sm md:text-md"
            >Stream Now</NuxtLink
          >
          <p class="text-white md:text-lg text-md">
            <span class="font-bold md:text-lg text-md">{{ item.genre }}</span
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
            sizes="100vw sm:50vw md:400px"
            densities="x1"
            format="webp"
            class="object-cover w-full"
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
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/689x387.jpg",
    genre: "Crime ",
    parag: "Pressume nothing.",
    alt: "Pressumed Innocent Image",
    label: "Item 1",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/689x387.jpg",
    genre: "Thriller ",
    parag: "Cath up now. New season Jan. 17",
    alt: "Severance Image",
    label: "Item 2",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/689x387.jpg",
    genre: "Comedy ",
    parag: "Breakdown. Breakthrough",
    alt: "Shrinking Image",
    label: "Item 3",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/_E3bQBkRfwFDVj2heRfLsA/689x387.jpg",
    genre: "Comedy ",
    parag: "Will they make history...or fake it?",
    alt: "Fly me to the moon Image",
    label: "Item 4",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/S2T1FMcov5a0GzmninlU4Q/689x387.jpg",
    genre: "Thriller ",
    parag: "Emmy Award winner.",
    alt: "Slow horses Image",
    label: "Item 5",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/689x387.jpg",
    genre: "Comedy ",
    parag: "Kindess makes a comeback",
    alt: "Ted Lasso Image",
    label: "Item 6",
  },
]);

const carouselImage = ref([
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/05/4f/66/054f66a9-ada8-6bad-7916-db26fd8ceb27/f5ef6771-7f39-4eb5-8e81-b6cbc7ebeb53.png/286x161.jpg",
    button: "Watch Now",
    paragraph: "Calm Meditation with Visualization",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/286x161.jpg",
    button: "Play Now",
    paragraph: "Hello Kitty Island Adventure ",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/bd/60/67/bd6067ae-64ac-04df-dc96-4757069c37dd/6610be22-3caa-493c-90b0-a8f73520c9bf.png/286x161.jpg",
    button: "Play Now",
    paragraph: "NBA 2k2025 ",
  },
  {
    image:
      " https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/1d/b0/a9/1db0a934-86ab-b440-e0b8-51dda48e78e9/media-YO_JL_0199-9182927-Artwork-iOS-302129.png/286x161.jpg",
    button: "Play Now",
    paragraph: "Yoga with Jonelle ",
  },
]);

const currentSlide = ref(0); // Track the current slide
const translateX = ref(0);
const speed = 1; // Speed of scrolling in pixels per frame

let animationFrameId = null;

const visibleItems = computed(() => {
  // Access carousel.value to ensure it's iterable
  return [...carouselItems.value, ...carouselItems.value];
});

const carouselVisible = computed(() => {
  return [...carouselImage.value, ...carouselImage.value];
});

// Animation function to move the carousel
const animateCarousel = () => {
  translateX.value -= speed;

  // Reset the position when the first set of items is completely out of view
  if (Math.abs(translateX.value) >= carouselItems.value.length * 800) {
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
