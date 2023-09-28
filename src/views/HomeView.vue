<template>
    <BaseLayout title="Выберите набор данных">
        <div class="flex justify-center gap-2">
            <BaseButton class="w-[16rem]">Большой набор данных</BaseButton>
            <BaseButton class="w-[16rem]">Малый набор данных</BaseButton>
        </div>
    </BaseLayout>
</template>
§
<script setup lang="ts">
import BaseLayout from '~/components/base/BaseLayout.vue'
import BaseButton from '~/components/base/BaseButton.vue'
</script>
