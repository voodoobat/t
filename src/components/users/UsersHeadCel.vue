<template>
    <th class="text-left p-2 cursor-pointer select-none" @click="sort">
        <div class="flex gap-2">
            <span>{{ text }}</span>
            <span class="flex flex-col relative top-0.5 text-gray-300">
                <BaseIcon
                    class="w-2 h-2 rotate-180 transition-colors"
                    :class="{
                        'text-blue-600': isActive && store.sort?.direction === 'DESC',
                    }"
                    name="chevron"
                />
                <BaseIcon
                    class="w-2 h-2 transition-colors"
                    :class="{
                        'text-blue-600': isActive && store.sort?.direction === 'ASC',
                    }"
                    name="chevron"
                />
            </span>
        </div>
    </th>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '~/components/base/BaseIcon.vue'
import { SortPropType } from '~/constants/sort.ts'
import { useUsersStore } from '~/store/useUsersStore.ts'

const props = defineProps<{
    text: string
    prop: SortPropType
}>()

const store = useUsersStore()
const isActive = computed(() => store.sort?.prop === props.prop)

const sort = () => {
    if (store.sort?.prop === props.prop) {
        store.sort.direction = store.sort.direction === 'ASC' ? 'DESC' : 'ASC'
    } else {
        store.sort = {
            prop: props.prop,
            direction: store.sort?.direction || 'ASC',
        }
    }
}
</script>
