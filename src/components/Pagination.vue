<template>
    <div class="flex justify-center">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <template v-if="currentPage > 1">
                <a @click="goToPage(currentPage - 1)"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M10.707 3.293a1 1 0 0 1 0 1.414L6.414 9H16a1 1 0 0 1 0 2H6.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </template>

            <template v-for="page in totalPages" :key="page">
                <template v-if="Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages">
                    <a @click="goToPage(page)"
                        :class="{ 'bg-indigo-50 border-indigo-500 text-indigo-600': page === currentPage, 'border-gray-300 text-gray-500 hover:bg-gray-50': page !== currentPage }"
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium cursor-pointer">
                        {{ page }}
                    </a>
                </template>
                <template v-else-if="Math.abs(page - currentPage) === 3">
                    <span
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                </template>
            </template>
            <template v-if="currentPage < totalPages">
                <a @click="goToPage(currentPage + 1)"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <svg class="h-5 w-5 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M10.707 3.293a1 1 0 0 1 0 1.414L6.414 9H16a1 1 0 0 1 0 2H6.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </template>
        </nav>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
const $props = withDefaults(
    defineProps<{
        totalItems: number,
        itemsPerPage: number,
        currentPage: number,
    }>(), {}
)
const $emit = defineEmits(['changePage'])
const totalPages = computed(() => Math.ceil($props.totalItems / $props.itemsPerPage))
const currentPage = ref($props.currentPage)

const goToPage = (page: number) => {
    if (page !== currentPage.value) {
        currentPage.value = page
        $emit("changePage", page)
    }
}
</script>