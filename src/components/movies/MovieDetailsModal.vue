<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" v-if="isOpen">
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="w-full h-96 bg-cover bg-center" :style="{ backgroundImage: `url(${movieDetails?.Poster})` }">
                </div>

                <div class="px-6 py-4">
                    <div class="text-xl font-bold mb-2">{{ movieDetails?.Title }} - {{ movieDetails?.Year }}</div>
                    <p class="text-gray-700 text-base">{{ movieDetails?.Plot }}</p>
                </div>
                <div class="flex flex-col">
                    <StarRating v-for="rating, index in movieDetails?.Ratings" :key="index" :rating="rating" />
                </div>
                <div class="flex-row gap-2 px-6 py-4 flex justify-end">
                    <button type="button"
                        class="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        @click="handleClose()">
                        Close
                    </button>
                    <button type="button"
                        class="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        @click="handleFullView()">
                        Full View
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { StarRating } from "@/components";
import { useRouter } from "vue-router";

const router = useRouter();
const $props = withDefaults(
    defineProps<{
        movieDetails: any,
        isOpen: boolean
    }>(), {}
)
const $emit = defineEmits(["onClose"])

const handleClose = () => {
    $emit('onClose')
}
const handleFullView = () => {
    router.push({ name: 'details', params: { 'title': $props.movieDetails.Title } })
}
</script>
  