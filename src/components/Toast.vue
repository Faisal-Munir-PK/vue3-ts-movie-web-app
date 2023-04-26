<template>
    <div class="text-white px-6 py-3 border-0 rounded absolute top-16 right-0 z-50 h-14 animate-bounce w-auto flex flex-row"
        v-if="Toast.isActive" :class="{ 'bg-red-500': Toast.isError, 'bg-green-500': Toast.isSuccess }">
        <span class="inline-block align-middle w-full mr-20">
            <b class="capitalize">Error:</b> {{ Toast.message }}
        </span>
        <button class="absolute bottom-0 right-0 mb-5 mr-6 text-white font-bold uppercase" @click="handleToast()">
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
    store.commit('SET_TOAST', {
        isActive: false,
        message: "",
        isError: false
    })
}
onMounted(() => {
    setTimeout(() => {
        closeToast.value = false
        handleToast()
    })
})
</script>