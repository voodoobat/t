<template>
    <div class="flex items-center gap-2">
        <label v-if="label" class="text-sm">
            {{ label }}
        </label>
        <div class="relative">
            <select class="select" @change="change">
                <option
                    v-for="{ text, value } in options"
                    :key="value"
                    :value="value"
                >
                    {{ text }}
                </option>
            </select>
            <BaseIcon class="icon" name="chevron" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { OptionInterface } from '~/constants/select.ts'
import BaseIcon from '~/components/base/BaseIcon.vue'

const emit = defineEmits(['update:value', 'change'])
defineProps<{
    label?: string
    options: OptionInterface[]
}>()

const change = (ev: Event) => {
    const target = ev.target as HTMLInputElement

    emit('update:value', target.value)
    emit('change', ev)
}
</script>

<style scoped>
.select {
    @apply py-3
        pl-3
        pr-7
        bg-transparent
        border
        border-gray-300
        rounded
        text-sm
        appearance-none
        leading-none;
}

.icon {
    @apply absolute
        bottom-1/2
        translate-y-1/2
        right-3
        w-2
        h-2
        text-gray-700;
}
</style>
