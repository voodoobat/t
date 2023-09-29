<template>
    <component
        :is="component"
        :to="to"
        :type="type"
        class="button"
        :class="{ 'is-disabled': disabled }"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
    type?: 'button' | 'submit' | ''
    to?: string
    disabled?: boolean
}>()

const component = computed(() => {
    return props.to ? RouterLink : 'button'
})
</script>

<style scoped>
.button {
    @apply text-center
        py-4
        px-6
        bg-blue-950
        text-blue-400
        text-sm
        rounded
        transition-colors
        hover:bg-blue-800
        hover:text-white;
}
</style>
