<template>
    <teleport to="body">
        <transition name="fx-modal" appear>
            <div v-if="isOpen" class="fixed w-full h-full top-0 left-0">
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
import { watch } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps<{
    title?: string
    isOpen: boolean
}>()

const onKeyup = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
        emit('close')
    }
}

watch(props, ({ isOpen }) => {
    if (isOpen) {
        document.body.classList.add('overflow-hidden')
        document.addEventListener('keyup', onKeyup)
    } else {
        document.body.classList.remove('overflow-hidden')
        document.removeEventListener('keyup', onKeyup)
    }
})
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
