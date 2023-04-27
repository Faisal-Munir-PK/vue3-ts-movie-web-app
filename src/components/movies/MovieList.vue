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
                <div class="relative shadow-2xl">
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
                        class="absolute top-0 right-0 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-tr-lg rounded-br-lg shadow transition delay-75 duration-75">Search</button>
                </div>
            </form>
            <div class="flex justify-between h-16">
                <h2 class="order-first text-2xl font-bold text-white">Featured Movies</h2>
                <div class="order-last">
                    <div class="flex flex-row gap-3 text-xl font-bold text-white mb-6">Sort
                        <button @click="sortAsc()"
                            class="bg-blue-500 h-10 w-16 rounded-md align-middle px-5 hover:bg-blue-600 transition delay-75 duration-75 shadow-md">
                            <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30,29.88H29L25.71,18.93s0-.06-.05-.09a.76.76,0,0,0-.09-.18l-.12-.14-.14-.12-.19-.1-.08,0H25l-.2,0-.2,0h-.09l-.08,0-.19.1a.74.74,0,0,0-.13.12.64.64,0,0,0-.13.15.91.91,0,0,0-.09.17s0,.05-.05.09l-3.28,11h-1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2h-.41l.9-3H26l.9,3H26.5a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Zm-5.91-5,.66-2.18.66,2.18Z" />
                                <path
                                    d="M2.69,6.72,6.25,3.33V31a1,1,0,0,0,2,0V3.33l3.56,3.39A1,1,0,0,0,12.5,7a1,1,0,0,0,.73-.31,1,1,0,0,0,0-1.42L7.94.27A1.1,1.1,0,0,0,7.8.18a1.51,1.51,0,0,0-.17-.1,1,1,0,0,0-.76,0,.86.86,0,0,0-.16.1.75.75,0,0,0-.15.09l-5.25,5A1,1,0,1,0,2.69,6.72Z" />
                                <path
                                    d="M30,10.12a1,1,0,0,0-1,1v.67H21.75l9-10A1,1,0,0,0,30.91.71,1,1,0,0,0,30,.12H19.5a1,1,0,0,0-1,1V2.79a1,1,0,0,0,2,0V2.12h7.26l-9,10a1,1,0,0,0-.17,1.07,1,1,0,0,0,.91.6H30a1,1,0,0,0,1-1V11.12A1,1,0,0,0,30,10.12Z" />
                            </svg>
                        </button>
                        <button @click="sortDesc()"
                            class="bg-blue-500 h-10 w-16 rounded-md align-middle px-5 hover:bg-blue-600 transition delay-75 duration-75 shadow-md">
                            <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30,11.67H29L25.71.71s0,0-.05-.08a.61.61,0,0,0-.09-.18c0-.06-.08-.1-.12-.15L25.31.19a.69.69,0,0,0-.19-.1L25,0h-.58l-.08,0a.69.69,0,0,0-.19.1.69.69,0,0,0-.13.11l-.13.15a1,1,0,0,0-.09.18s0,.05-.05.08l-3.28,11h-1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2h-.41l.9-3H26l.9,3H26.5a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Zm-5.91-5,.66-2.19.66,2.19Z" />
                                <path
                                    d="M7.25,0a1,1,0,0,0-1,1V28.67l-3.56-3.4a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l5.25,5c0,.05.1.06.15.1a.86.86,0,0,0,.16.1.94.94,0,0,0,.76,0,1.51,1.51,0,0,0,.17-.1s.1-.06.14-.1l5.25-5a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0l-3.56,3.4V1A1,1,0,0,0,7.25,0Z" />
                                <path
                                    d="M30,28.33a1,1,0,0,0-1,1V30H21.75l9-10a1,1,0,0,0,.17-1.07,1,1,0,0,0-.91-.6H19.5a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0v-.67h7.26l-9,10A1,1,0,0,0,19.5,32H30a1,1,0,0,0,1-1V29.33A1,1,0,0,0,30,28.33Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
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
const filteredMovies = ref<IMovie[]>(movies.value)
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
const sortAsc = () => {
    filteredMovies.value = movies.value.sort((a: IMovie, b: IMovie) => a.Title.localeCompare(b.Title))
}
const sortDesc = () => {
    filteredMovies.value = movies.value.sort((a: IMovie, b: IMovie) => b.Title.localeCompare(a.Title))
}
onMounted(() => {
    if (movies.value.length === 0)
        store.dispatch('fetchMovies')
})
</script>
