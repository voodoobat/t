<template>
    <LayoutDefault title="Выберите набор данных">
        <div class="flex justify-center gap-2">
            <BaseButton to="/large" class="w-[16rem]">Большой набор данных</BaseButton>
            <BaseButton to="/small" class="w-[16rem]">Малый набор данных</BaseButton>
        </div>
    </LayoutDefault>
</template>

<script setup lang="ts">
import LayoutDefault from '~/components/layout/LayoutDefault.vue'
import BaseButton from '~/components/base/BaseButton.vue'
</script>
