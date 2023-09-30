<template>
    <form @submit.prevent="submit">
        <div class="flex flex-col gap-3 mb-5">
            <BaseInput
                v-model:value="user.id"
                class="max-w-[10em]"
                type="number"
                placeholder="id"
            />
            <BaseInput
                v-model:value="user.firstName"
                class="max-w-[20em]"
                placeholder="firstName"
            />
            <BaseInput v-model:value="user.lastName" class="max-w-[20em]" placeholder="lastName" />
            <BaseInput v-model:value="user.email" class="max-w-[20em]" placeholder="email" />
            <BaseInput
                v-model:value="user.phone"
                maska="+7 (###) ###-##-##"
                class="max-w-[15em]"
                placeholder="phone"
            />
        </div>
        <BaseButton type="submit" :disabled="isDisabled">Добавить в таблицу</BaseButton>
    </form>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import { IUser } from '~/contracts/schema/user.ts'

const emit = defineEmits(['submit'])
const user = reactive<IUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
})

const isDisabled = computed(() => {
    const keys = Object.keys(user) as (keyof IUser)[]
    return !keys.reduce((acc, prop) => {
        return acc && !!user[prop]
    }, true)
})

const submit = () => {
    emit('submit', user)
}
</script>
