<template>
    <div v-if="store.isLoading" class="text-xl text-center">Загрузка...</div>
</template>

<script setup lang="ts">
import { useUsersStore } from '~/store/useUsersStore.ts'

const store = useUsersStore()
</script>
