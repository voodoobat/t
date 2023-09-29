<template>
    <table>
        <thead>
            <tr>
                <th
                    v-for="column in columns"
                    :key="column.key"
                    class="px-3 py-2 text-left cursor-pointer select-none"
                    @click="$emit('sort', column.key)"
                >
                    <span class="flex gap-2">
                        <span>{{ column.name }}</span>
                        <span class="flex flex-col relative top-0.5 text-gray-300">
                            <BaseIcon
                                class="w-2 h-2 rotate-180 transition-colors"
                                :class="{
                                    'text-blue-600':
                                        column.key === sort?.key && sort.direction === 'DESC',
                                }"
                                name="chevron"
                            />
                            <BaseIcon
                                class="w-2 h-2 transition-colors"
                                :class="{
                                    'text-blue-600':
                                        column.key === sort?.key && sort.direction === 'ASC',
                                }"
                                name="chevron"
                            />
                        </span>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(obj, key) in data" :key="key" class="border-b border-gray-200">
                <td
                    v-for="column in columns"
                    :key="column.key"
                    class="px-3 py-2"
                    @click="$emit('onClickColumn', obj[column.key])"
                >
                    {{ obj[column.key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import BaseIcon from '~/components/base/BaseIcon.vue'
import {
    IBaseTableColumn,
    IBaseTableData,
    IBaseTableSort,
} from '~/contracts/components/baseTable.ts'

defineEmits(['onClickColumn', 'sort'])
defineProps<{
    columns: IBaseTableColumn[]
    data: IBaseTableData[]
    sort?: IBaseTableSort
}>()
</script>
