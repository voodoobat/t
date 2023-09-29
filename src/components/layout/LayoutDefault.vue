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
            <LayoutLoader v-if="isLoading" class="mt-10" />
            <section v-else class="mt-10">
                <slot />
            </section>
        </LayoutContainer>
    </main>
</template>

<script setup lang="ts">
import LayoutContainer from '~/components/layout/LayoutContainer.vue'
import LayoutLoader from '~/components/layout/LayoutLoader.vue'

defineProps<{
    title?: string
    isLoading?: boolean
}>()
</script>
