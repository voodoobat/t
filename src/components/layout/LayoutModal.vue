<template>
    <teleport to="body">
        <transition name="fx-modal" appear>
            <div class="fixed w-full h-full top-0 left-0">
                <div
                    class="absolute top-0 left-0 w-full h-full bg-black/50"
                    @click="$emit('close')"
                />
                <div class="window">
                    <h2 v-if="title" class="text-3xl font-accent font-semibold mb-6">
                        {{ title }}
                    </h2>
                    <slot />
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineEmits(['close'])
defineProps<{
    title?: string
}>()

onMounted(() => document.body.classList.add('overflow-hidden'))
onUnmounted(() => document.body.classList.remove('overflow-hidden'))
</script>

<style scoped>
.window {
    @apply absolute
        bottom-1/2
        right-1/2
        translate-x-1/2
        translate-y-1/2
        py-8
        px-12
        bg-white
        rounded
        shadow;
}
</style>

<style scoped>
.fx-modal-enter-from,
.fx-modal-leave-to {
    @apply opacity-0;
}

.fx-modal-enter-to,
.fx-modal-leave-from {
    @apply opacity-100;
}

.fx-modal-enter-active,
.fx-modal-leave-active {
    @apply transition-all;
}
</style>
