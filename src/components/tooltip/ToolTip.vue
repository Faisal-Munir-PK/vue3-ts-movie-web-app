<template>
    <div class="relative inline-block">
        <slot />
        <div v-if="isOpen" class="absolute z-10 p-2 text-sm text-white bg-gray-700 rounded-md"
            style="top: 100%; left: 50%; transform: translateX(-50%);" role="tooltip" aria-label="Tooltip">
            <slot name="content" />
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const isOpen = ref(false);

        const handleMouseEnter = () => {
            isOpen.value = true;
        };

        const handleMouseLeave = () => {
            isOpen.value = false;
        };

        onMounted(() => {
            document.addEventListener('mouseenter', handleMouseEnter);
            document.addEventListener('mouseleave', handleMouseLeave);
        });

        onUnmounted(() => {
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        });

        return {
            isOpen,
        };
    },
};
</script>