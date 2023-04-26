<template>
  <div class="bg-white shadow-md overflow-hidden rounded-xl md:w-full lg:w-64 lg:h-80 cursor-pointer" @click="openModal(movie)">
    <img :src="movie.Poster" :alt="movie.Title" class="w-full h-64 object-cover rounded-lg" :title="movie.Title" />
    <div class="px-4">
      <h3 class="text-lg font-bold">{{ movie.Title }}</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IMovie } from '@/types/movie';
const $props = withDefaults(
  defineProps<{
    movie: IMovie,
  }>(), {}
)
const $emits = defineEmits(['click:openModal'])
const openModal = (movie: IMovie) => {
  $emits('click:openModal', movie)
}
</script>