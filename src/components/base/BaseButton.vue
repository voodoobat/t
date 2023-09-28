<template>
    <button :type="type" class="button">
        <slot />
    </button>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        type: 'button' | 'submit'
    }>(),
    {
        type: 'button',
    },
)
</script>

<style scoped>
.button {
    @apply text-center
        py-4
        px-6
        bg-blue-950
        text-blue-400
        text-sm
        rounded;
}
</style>
