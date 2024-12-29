<template>
  <header
    :class="[
      'fixed top-0 z-50 left-0 right-0 transition-all duration-300',
      isHeaderWhite ? 'bg-white' : 'bg-white/55 backdrop-blur-sm ',
    ]"
  >
    <!-- Main header -->
    <div
      class="px-4 py-2 flex md:justify-center items-center justify-between gap-10"
    >
      <NuxtLink class="text-xl font-bold" to="/">
        <Icon name="uil:apple" style="color: black" alt="Apple Logo" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6 items-center justify-center">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="text-black text-xs px-1"
          @mouseenter="showComponent(item.name)"
          @mouseleave="startHideTimer"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="flex gap-5 items-center">
        <div class="flex gap-3 items-center">
          <NuxtLink to="/" class="px-2">
            <Icon name="uil:search" style="color: black" alt="Search Icon"
          /></NuxtLink>
          <NuxtLink to="/" class="px-2">
            <Icon name="uil:cart" style="color: black" alt="Cart Icon"
          /></NuxtLink>
        </div>
        <button
          class="md:hidden text-black"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <div v-if="isMenuOpen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-full"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-full"
      >
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-white z-50 md:hidden top-10"
        >
          <div class="flex flex-col">
            <nav class="flex flex-col p-4 bg-white h-screen">
              <NuxtLink
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="text-xl text-gray-600 hover:text-gray-900 py-3 transition-colors duration-200"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Store Component with Slide Animation -->
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Store
        v-if="visibleComponent === 'Store'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>

    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Mac
        v-if="visibleComponent === 'Mac'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>

    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Ipad
        v-if="visibleComponent === 'iPad'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>

    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Iphone
        v-if="visibleComponent === 'iPhone'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>

    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Watch
        v-if="visibleComponent === 'Watch'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Vision
        v-if="visibleComponent === 'Vision'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Airpods
        v-if="visibleComponent === 'AirPods'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Tvhome
        v-if="visibleComponent === 'TV & Home'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Entertainment
        v-if="visibleComponent === 'Entertainment'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Accessories
        v-if="visibleComponent === 'Accessories'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
    <Transition
      name="fade"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
    >
      <Support
        v-if="visibleComponent === 'Support'"
        class="absolute left-0 w-full top-full z-10"
        @mouseenter="cancelHideTimer"
        @mouseleave="startHideTimer"
      />
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false); // State for mobile menu
const visibleComponent = ref(null); // Track which component is visible
const isHeaderWhite = ref(false); // Track if the header should be white
let hideTimer = null;

// Show the correct component based on the menu item hovered
const showComponent = (name) => {
  visibleComponent.value = name; // Set the visible component to the name
  isHeaderWhite.value = true; // Set header to white on hover
  cancelHideTimer();
};

// Start a timer to hide the currently visible component
const startHideTimer = () => {
  hideTimer = setTimeout(() => {
    visibleComponent.value = null; // Clear the visible component
    isHeaderWhite.value = false; // Reset header when hover ends
  }, 200); // Delay to allow for hover transitions
};

// Cancel the hide timer
const cancelHideTimer = () => {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
};

const handleScroll = () => {
  visibleComponent.value = null;
  isHeaderWhite.value = false; // Reset header background
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Navigation items
const menuItems = [
  { name: "Store", path: "/" },
  { name: "Mac", path: "/" },
  { name: "iPad", path: "/" },
  { name: "iPhone", path: "/" },
  { name: "Watch", path: "/" },
  { name: "Vision", path: "/" },
  { name: "AirPods", path: "/" },
  { name: "TV & Home", path: "/" },
  { name: "Entertainment", path: "/" },
  { name: "Accessories", path: "/" },
  { name: "Support", path: "/" },
];
</script>

<style scoped>
/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
</style>
