<template>
    <div class="absolute mt-6 inset-0 bg-fixed bg-cover h-screen " :style="{ backgroundImage: `url(${movieDetails.Poster})` }">
        <div class="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur"></div>
        <div class="relative z-10 container mx-auto py-16">
            <div class="flex flex-col md:flex-row">
                <div class="flex md:w-2/5 items-center justify-center">
                    <img :src="movieDetails.Poster" alt="Movie poster" class="w-24 lg:w-96 sm:w-24 md:w-24 xl:w-96 rounded-lg shadow-lg">
                </div>
                <div class="md:w-3/5 md:pl-8 mt-8 md:mt-0 text-white px-5">
                    <h1 class="text-4xl font-bold mb-4">{{ movieDetails.Title }}</h1>
                    <div class="flex mb-4 ">
                        <div class="bg-green-500 text-white px-4 py-2 rounded-lg"
                            v-for="rating, index in movieDetails.Ratings" :key="index">
                            <span>{{ rating.Value }}</span>
                        </div>
                        <div class="text-white px-4">{{ movieDetails.Year }}</div>
                        <div class="text-white">{{ movieDetails.Runtime }}</div>
                    </div>
                    <div class="text-white mb-4">
                        <span v-for="(genre, index) in movieDetails.Genre" :key="index">
                            {{ genre.name }}
                            <span v-if="index < movieDetails.Genre.length - 1" class="mx-2">|</span>
                        </span>
                    </div>
                    <div class="text-white mb-4">{{ movieDetails.Plot }}</div>
                    <div class="text-white mb-4">
                        <div class="font-bold mb-2">Writer:</div>
                        <div>{{ movieDetails.Writer }}</div>
                    </div>
                    <div class="text-white mb-4">
                        <div class="font-bold mb-2">Stars:</div>
                        <div>{{ movieDetails.Actors }}</div>
                    </div>
                    <button
                        class="bg-blue-500 hover:bg-blue-600 transition delay-75 duration-75 text-white px-4 py-2 rounded-lg mt-4 w-full"
                        @click="showTrailer = true">Play Trailer</button>
                </div>
            </div>
            <!-- <div class="mt-16" v-if="movieDetails?.images">
                <vue-agile :settings="sliderSettings">
                    <div v-for="(image, index) in movieDetails.images" :key="index" class="w-1/3 px-4">
                        <img :src="image.file_path" alt="Movie image" class="w-full rounded-lg shadow-lg">
                    </div>
                </vue-agile>
            </div> -->
        </div>
        <div class="movie-trailer-modal fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
            v-if="showTrailer">
            <div class="w-full max-w-2xl">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <button class="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-white"
                        @click="showTrailer = false">&times;</button>
                    <div class="video-responsive">
                        <iframe :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="bg-[#7F7F7F] min-h-screen mt-10">
        <div class="container mx-auto pt-8">
            <div class="flex flex-wrap items-start">
                <div class="w-full md:w-2/5">
                    <img class="w-full" :src="movieDetails.Poster" :alt="movieDetails.Title">
                </div>
                <div class="w-full md:w-3/5 px-4">
                    <h1 class="text-white text-4xl font-bold mb-2">{{ movieDetails.Title }}</h1>
                    <p class="text-white text-lg mb-2">Released in {{ movieDetails.Year }}</p>
                    <p class="text-white text-lg mb-2">{{ movieDetails.Plot }}</p>
                    <p class="text-white text-lg mb-2"><p>Writer</p>&nbsp{{ movieDetails.Writer }}</p>
                    <p class="text-white text-lg mb-2"><p>Cast</p>&nbsp{{ movieDetails.Actors }}</p>
                    <p class="text-white text-lg mb-2"><p>Awards</p>&nbsp{{ movieDetails.Awards }}</p>
                    <p class="text-white text-lg mb-2"><p>Director</p>&nbsp{{ movieDetails.Director }}</p>
                    <div class="flex mb-2">
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
    </div> -->
</template>
<script setup lang="ts">
import store from "@/store";
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { StarRating } from "@/components";
import { IMovie } from "@/types/movie";
const route = useRoute();
const movieDetails = computed((): IMovie => {
    return store.getters.getMovie
})
const showTrailer = ref(false)
onMounted(() => {
    store.dispatch('searchMovieByTitle', route.params.title)

})
</script>

