<template>
    <header class="my-10">
        <BaseContainer>
            <RouterLink to="/">
                <img src="/logo.svg" alt="" />
            </RouterLink>
        </BaseContainer>
    </header>
    <main class="grow">
        <BaseContainer>
            <h1
                v-if="title"
                class="mt-10 text-4xl font-accent font-semibold text-center"
            >
                {{ title }}
            </h1>
            <BaseLoader v-if="isLoading" class="mt-10" />
            <section v-else class="mt-10">
                <slot />
            </section>
        </BaseContainer>
    </main>
</template>

<script setup lang="ts">
import BaseContainer from '~/components/base/BaseContainer.vue'
import BaseLoader from '~/components/base/BaseLoader.vue'

defineProps<{
    title?: string
    isLoading?: boolean
}>()
</script>
