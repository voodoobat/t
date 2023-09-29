<template>
    <div class="inline-flex text-sm">
        <input
            :value="value"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="w-full py-2 px-3 border border-gray-100 focus:border-gray-200 outline-none rounded-sm transition-colors"
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
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'password'
    | 'range'

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
