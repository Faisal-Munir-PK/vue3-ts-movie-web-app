<template>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
        <button v-for="(genre, index) in genres" :key="index"
            class="py-2 px-4 rounded-lg text-white font-bold bg-sky-500 hover:bg-sky-600"
            :class="{ 'bg-sky-800': selectedGenre === genre }" @click="emitGenre(genre)">
            {{ genre }}
        </button>
    </div>
</template>
<script setup lang="ts">
import { MockGenre } from '../../../mocks/GenreMock'
import { ref } from "vue";

const selectedGenre = ref<string | null>()
const $emit = defineEmits(["click:genre"])
const emitGenre = (genre: string) => {
    selectedGenre.value = genre
    $emit('click:genre', genre)
}
const genres = ref<string[]>(MockGenre)
</script>