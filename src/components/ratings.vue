<template>
    <div class="flex flex-row">
        <span class="text-white">&nbsp {{ rating.Source }} &nbsp</span>
        <button type="button" v-for="i in 5" :class="{ 'mr-1': i < 5 }">
            <svg class="block h-3 w-3" :class="[rating.Value >= i ? 'text-blue' : 'text-grey']" fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
        </button>
    </div>
</template>
  
<script setup lang="ts">
import { IRating } from '@/types/movie';

const $props = withDefaults(
    defineProps<{
        rating: IRating,
    }>(), {}
)
</script>
  