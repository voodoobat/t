<template>
    <svg><use :href="`#icon-${name}`" /></svg>
</template>

<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>
