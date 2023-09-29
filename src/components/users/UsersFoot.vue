<template>
    <div class="flex flex-col-reverse md:flex-row justify-between gap-6 pt-2 pb-6">
        <BasePager
            :active="store.page"
            :size="store.showBy"
            :total="store.searchResults.length"
            @change="(page) => (store.page = page)"
        />
        <BaseSelect
            v-model:value="store.showBy"
            label="Rows per page"
            :options="options"
            @change="store.page = 1"
        />
    </div>
</template>

<script setup lang="ts">
import BaseSelect from '~/components/base/BaseSelect.vue'
import { OptionInterface } from '~/constants/select.ts'
import { useUsersStore } from '~/store/useUsersStore.ts'
import BasePager from '~/components/base/BasePager.vue'

const store = useUsersStore()
const options: OptionInterface[] = [
    {
        value: 5,
        text: '5',
    },
    {
        value: 15,
        text: '15',
    },
    {
        value: 25,
        text: '25',
    },
    {
        value: 50,
        text: '50',
    },
]
</script>
