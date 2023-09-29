<template>
    <div class="inline-flex text-sm">
        <input
            :value="value"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="input"
            @input="$emit('update:value', $event.target?.value)"
            @focus="$emit('focus', $event.target)"
        />
    </div>
</template>

<script setup lang="ts">
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

defineEmits(['update:value', 'focus'])
withDefaults(
    defineProps<{
        type?: HTMLInputTypeAttribute
        placeholder?: string
        required?: boolean
        value: string | number
    }>(),
    {
        type: 'text',
        placeholder: '',
    },
)
</script>

<style scoped>
.input {
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
</style>
