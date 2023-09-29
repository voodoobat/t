<template>
    <nav class="text-sm flex items-center gap-2">
        <button class="button" @click="change('dec')">
            <BaseIcon class="w-4 h-4 rotate-180 text-gray-700" name="arrow" />
        </button>
        <span class="button current">
            {{ active }}
        </span>
        <span class="count"> / {{ pages }} </span>
        <button class="button" @click="change('inc')">
            <BaseIcon class="w-4 h-4 text-gray-700" name="arrow" />
        </button>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '~/components/base/BaseIcon.vue'

const emit = defineEmits(['change'])
const props = defineProps<{
    active: number
    size: number
    total: number
}>()

const pages = computed(() => {
    return Math.ceil(props.total / props.size)
})

const change = (action: 'inc' | 'dec') => {
    if (action === 'inc' && props.active < pages.value) {
        emit('change', props.active + 1)
    }

    if (action === 'dec' && props.active - 1 > 0) {
        emit('change', props.active - 1)
    }
}
</script>

<style scoped>
.button {
    @apply flex
        justify-center
        items-center
        w-12
        h-12
        rounded
        leading-none
        border
        border-gray-300;
}
</style>
