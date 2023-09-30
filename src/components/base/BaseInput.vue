<template>
    <div class="inline-flex text-sm">
        <input
            v-maska
            :data-maska="maska"
            :value="value"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="input"
            @input="input"
            @focus="$emit('focus', $event.target)"
        />
    </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska'

type HTMLInputTypeAttribute =
    | 'number'
    | 'search'
    | 'time'
    | 'text'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'email'
    | 'hidden'
    | 'password'

const emit = defineEmits(['update:value', 'focus', 'input'])
withDefaults(
    defineProps<{
        type?: HTMLInputTypeAttribute
        placeholder?: string
        required?: boolean
        value: string
        maska?: string
    }>(),
    {
        type: 'text',
        placeholder: '',
        maska: '',
    },
)

const input = (ev: Event) => {
    const { value } = ev.target as HTMLInputElement

    emit('update:value', value)
    emit('input', value)
}
</script>

<style scoped>
.input {
    -moz-appearance: textfield;

    @apply w-full
        py-2
        px-4
        leading-none
        border
        border-gray-200
        focus:border-blue-500
        outline-none
        rounded-sm
        transition-colors;
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
