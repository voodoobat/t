<template>
    <form @submit.prevent="submit">
        <div class="flex flex-col gap-3 mb-5">
            <BaseInput v-model:value="form.id" class="max-w-[10em]" placeholder="id" />
            <BaseInput
                v-model:value="form.firstName"
                class="max-w-[20em]"
                placeholder="firstName"
            />
            <BaseInput v-model:value="form.lastName" class="max-w-[20em]" placeholder="lastName" />
            <BaseInput v-model:value="form.email" class="max-w-[20em]" placeholder="email" />
            <BaseInput v-model:value="form.phone" class="max-w-[15em]" placeholder="phone" />
        </div>
        <BaseButton type="submit">Добавить в таблицу</BaseButton>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'

const form = reactive({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
})

const submit = () => {
    console.log(form)
}
</script>
