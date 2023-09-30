<template>
    <header class="my-10">
        <LayoutContainer>
            <RouterLink to="/">
                <img src="/logo.svg" alt="" />
            </RouterLink>
        </LayoutContainer>
    </header>
    <main class="grow">
        <LayoutContainer>
            <h1 v-if="title" class="mt-10 text-4xl font-accent font-semibold text-center">
                {{ title }}
            </h1>
            <div v-if="isLoading" class="text-3xl text-center animate-spin mt-24">⌛</div>
            <section v-else class="mt-10">
                <slot />
            </section>
        </LayoutContainer>
    </main>
</template>

<script setup lang="ts">
import LayoutContainer from '~/components/layout/LayoutContainer.vue'

defineProps<{
    title?: string
    isLoading?: boolean
}>()
</script>

<style scoped>
.fx-page-enter-from,
.fx-page-leave-to {
    @apply opacity-0 scale-125;
}

.fx-page-enter-to,
.fx-page-leave-from {
    @apply opacity-100 scale-100;
}

.fx-page-enter-active,
.fx-page-leave-active {
    @apply transition-all duration-500;
}
</style>
