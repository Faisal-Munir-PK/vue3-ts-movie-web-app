<template>
    <div class="relative overflow-hidden min-h-screen mt-10">
        <toast />
        <div class="absolute inset-0 z-0">
            <img src="../../assets/landing-background2.jpeg" alt="Background" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 px-6 py-12 md:px-16 lg:px-24 xl:px-32">
            <h1 class="text-4xl font-bold text-white leading-tight mb-8">Discover Your Next Favorite Movie</h1>
            <form class="max-w-lg mx-auto mb-8">
                <div class="relative">
                    <input type="text" class="w-full py-4 pl-12 pr-4 rounded-lg bg-white text-gray-800 shadow"
                        placeholder="Search for a movie" v-model="title" @blur="searchMovie()"
                        @keyup.enter="searchMovie()" />
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 15.5l5.5 5.5" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 9a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <button type="submit" @click="searchMovie()"
                        class="absolute top-0 right-0 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow">Search</button>
                </div>
            </form>
            <h2 class="text-2xl font-bold text-white mb-6">Featured Movies</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <MovieCard v-if="movies" v-for="movie in movies" :key="movie.id" :movie="movie"
                    @click:openModal="openModal(movie)" />
                <span class="text-2xl font-bold text-yellow-300 mb-6 animate-pulse" v-else> No movies to display. Search
                    again.</span>
            </div>
            <Pagination v-if="movies" class="mt-2" :totalItems="movies.length" :itemsPerPage="5" :currentPage="1"
                @changePage="changePage($event)" />
            <Genre @click:genre="onGenreSelection($event)" />
        </div>
        <MovieDetailsModal class="mt-24" :isOpen="isModalOpen" :movieDetails="movieDetails" @onClose="closeModal" />
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Genre } from "@/components/Filters"
import { MovieDetailsModal } from ".";
import store from '@/store';
import { IMovie } from "@/types/movie";
import { Pagination } from "@/components/";
import { Toast } from '@/components';
import { MovieCard } from "@/components/card"
const isModalOpen = ref<boolean>(false);
const movies = computed(() => {
    return store.getters.getMovies
})
const title = ref<string>("");
const searchMovie = () => {
    if (title.value != "")
        store.dispatch('searchMovie', title.value)
}
const selectedGenre = ref<string | null>(null)
const onGenreSelection = (e: any) => {
    selectedGenre.value = e
    store.dispatch('searchMovie', selectedGenre.value)
}
const openModal = (movie: IMovie) => {
    store.dispatch('searchMovieByTitle', movie.Title)
    isModalOpen.value = true;
}
const movieDetails = computed(() => {
    return store.getters.getMovie
})

const closeModal = () => {
    isModalOpen.value = false;
}

const changePage = (e: any) => {
    store.dispatch('fetchMovies', e)
}

onMounted(() => {
    if (movies.value.length === 0)
        store.dispatch('fetchMovies')
})
</script>
