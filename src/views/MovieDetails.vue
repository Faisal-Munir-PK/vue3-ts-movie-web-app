<template>
    <div class="absolute mt-6 inset-0 bg-fixed bg-cover h-screen"
        :style="{ backgroundImage: `url(${movieDetails.Poster})` }">
        <div class="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur"></div>
        <div class="relative z-10 container mx-auto py-16">
            <div class="flex flex-col md:flex-row">
                <div class="flex md:w-2/5 items-center justify-center">
                    <img :src="movieDetails.Poster" alt="Movie poster"
                        class="w-24 lg:w-96 sm:w-24 md:w-24 xl:w-96 rounded-lg shadow-lg">
                </div>
                <div class="md:w-3/5 md:pl-8 mt-8 md:mt-0 text-white px-5">
                    <h1 class="text-4xl font-bold mb-4">{{ movieDetails.Title }}</h1>
                    <div class="flex mb-4">
                        <div class="bg-green-500 text-white px-4 py-2 rounded-lg mr-3"
                            v-for="rating, index in movieDetails.Ratings" :key="index">
                            <span :title="rating.Source">
                                <p class="text-lg">{{ rating.Value }}</p>
                                <small class="text-xs">{{ rating.Source }}</small>
                            </span>
                        </div>
                        <div class="text-white px-4">
                            <div class="font-bold mb-2">Released in</div>
                            <div>
                                {{ movieDetails.Year }}
                            </div>
                        </div>
                        <div class="text-white">
                            <div class="font-bold mb-2">Run Time</div>
                            <div>
                                {{ movieDetails.Runtime }}
                            </div>
                        </div>
                    </div>
                    <div class="text-white mb-4">
                        <div class="font-bold mb-2">Genre</div>
                        <div>{{ movieDetails.Genre }}</div>
                    </div>
                    <div class="text-white mb-4">
                        <div class="font-bold mb-2">Plot</div>
                        <div>{{ movieDetails.Plot }}</div>
                    </div>
                    <div class="text-white mb-4">
                        <div class="font-bold mb-2">Writer</div>
                        <div>{{ movieDetails.Writer }}</div>
                    </div>
                    <div class="text-white mb-4">
                        <div class="font-bold mb-2">Stars</div>
                        <div>{{ movieDetails.Actors }}</div>
                    </div>
                    <button
                        class="bg-blue-500 hover:bg-blue-600 transition delay-75 duration-75 text-white px-4 py-2 rounded-lg mt-4 w-full"
                        @click="showTrailer = true">Play Trailer</button>
                </div>
            </div>
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

