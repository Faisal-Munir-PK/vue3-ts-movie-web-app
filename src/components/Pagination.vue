<template>
    <div class="flex justify-center mt-14">
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
                <li @click="goToPage(currentPage - 1)">
                    <a href="#" :disabled="currentPage === 1"
                        class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{ 'cursor-not-allowed': currentPage === 1 }">Previous</a>
                </li>
                <template v-for="page in totalPages" :key="page">
                    <template v-if="Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages">
                        <a @click="goToPage(page)"
                            class="px-3 cursor-pointer py-2.5 h-10 leading-tight -mt-2 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                            :class="{ 'bg-indigo-50 border-indigo-500 text-indigo-600': page === currentPage, 'border-gray-300 text-gray-500 hover:bg-gray-50': page !== currentPage }">{{
                                page }}</a>
                    </template>
                    <template v-else-if="Math.abs(page - currentPage) === 3">
                        <span
                            class="px-3 cursor-pointer py-2.5 h-10 leading-tight -mt-2 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">...</span>
                    </template>
                </template>
                <li @click="goToPage(currentPage + 1)">
                    <a :class="{ 'cursor-not-allowed': currentPage === totalPages }" :disabled="currentPage === totalPages"
                        class="px-3 cursor-pointer py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
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