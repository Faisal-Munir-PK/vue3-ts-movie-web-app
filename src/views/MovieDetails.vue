<template>
    <div class="bg-[#7F7F7F] min-h-screen mt-10">
        <div class="container mx-auto pt-8">
            <div class="flex flex-wrap items-start">
                <div class="w-full md:w-2/5">
                    <img class="w-full" :src="movieDetails.Poster" :alt="movieDetails.Title">
                </div>
                <div class="w-full md:w-3/5 px-4">
                    <h1 class="text-white text-4xl font-bold mb-2">{{ movieDetails.Title }}</h1>
                    <p class="text-white text-lg mb-6">Released in {{ movieDetails.Year }}</p>
                    <p class="text-white text-lg mb-6">{{ movieDetails.Plot }}</p>
                    <div class="flex mb-6">
                        <div class="flex flex-col" v-for="rating, index in movieDetails.Ratings" :key="index">
                            <StarRating :rating="rating" />
                            <div class="flex flex-row">
                                <svg class="fill-current text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 18.85L7.9 21.73L8.7 16.48L4.94 12.73L10.19 11.93L12 7.18L13.81 11.93L19.06 12.73L15.3 16.48L16.1 21.73L12 18.85Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 9.13L9.45 10.63L8.77 12.26L7.05 12.4L6 13.9L5.2 12.06L3.55 11.58L4.45 10.1L4.18 8.39L5.72 7.53L6.16 6.35L7.73 5.82L8.75 4.5L10.19 4.94L10.68 6.5L12 7.22L13.32 6.5L13.81 4.94L15.25 4.5L16.27 5.82L17.84 6.35L18.28 7.53L19.82 8.39L19.55 10.1L20.45 11.58L18.8 12.06L17.8 13.9L16.75 12.4L15.03 12.26L14.35 10.63L12 9.13Z" />
                                </svg>
                                <span class="ml-2 text-white">{{ rating.Value }}</span>
                            </div>
                        </div>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
                        Watch Trailer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import store from "@/store";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { StarRating } from "@/components";
const route = useRoute();
const movieDetails = computed(() => {
    return store.getters.getMovie
})
onMounted(() => {
    console.warn('working')
    console.warn("movieDetails", movieDetails.value)
    store.dispatch('searchMovieByTitle', route.params.title)

})
</script>

