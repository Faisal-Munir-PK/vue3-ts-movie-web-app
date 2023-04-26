<template>
    <div class="text-white px-6 py-3 border-0 rounded relative top-16 z-50 h-14 animate-bounce" v-if="Toast.isActive"
        :class="{ 'bg-red-500': Toast.isError, 'bg-green-500': Toast.isSuccess }">
        <span class="inline-block align-middle mr-8">
            <i class="fas fa-times"></i>
        </span>
        <span class="inline-block align-middle">
            <b class="capitalize">Error:</b> {{ Toast.message }}.
        </span>
        <button class="absolute bottom-0 right-0 mb-4 mr-6 text-white font-bold uppercase" @click="handleToast()">
            <span>Close</span>
            <span class="ml-2">&times;</span>
        </button>
    </div>
</template>
<script setup lang="ts">
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
const Toast = computed(() => {
    return store.getters.toastState
})
const closeToast = ref(false)
const handleToast = () => {
    store.commit('SET_TOAST', "")
}
onMounted(() => {
    setTimeout(() => {
        closeToast.value = false
        handleToast()
    })
})
</script>