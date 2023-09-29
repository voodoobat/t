<template>
    <LayoutDefault title="Выберите набор данных">
        <div class="flex justify-center gap-2">
            <BaseButton to="/large" class="button">Большой набор данных</BaseButton>
            <BaseButton to="/small" class="button">Малый набор данных</BaseButton>
        </div>
    </LayoutDefault>
</template>

<script setup lang="ts">
import LayoutDefault from '~/components/layout/LayoutDefault.vue'
import BaseButton from '~/components/base/BaseButton.vue'
</script>

<style scoped>
.button {
    @apply py-4 px-8 w-[16rem];
}
</style>
