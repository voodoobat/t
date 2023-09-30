<template>
    <div class="inline-flex flex-col gap-1 text-sm">
        <input
            v-maska
            :data-maska="maska"
            :value="value"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="input"
            :class="{ 'is-error': error }"
            @input="input"
            @focus="$emit('focus', $event.target)"
        />
        <span v-if="error" class="text-xs text-red-400">
            {{ error }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
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
        error?: string | Ref<string>
    }>(),
    {
        type: 'text',
        placeholder: '',
        maska: '',
        error: '',
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

.input.is-error {
    @apply border-red-400 text-red-400;
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
