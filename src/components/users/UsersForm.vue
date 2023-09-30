<template>
    <form @submit.prevent="submit">
        <div class="flex flex-col gap-3 mb-5">
            <BaseInput
                v-model:value="user.id"
                class="max-w-[10em]"
                type="number"
                placeholder="id"
                :error="v$.id.$errors[0]?.$message"
            />
            <BaseInput
                v-model:value="user.firstName"
                class="max-w-[20em]"
                placeholder="firstName"
                :error="v$.firstName.$errors[0]?.$message"
            />
            <BaseInput
                v-model:value="user.lastName"
                class="max-w-[20em]"
                placeholder="lastName"
                :error="v$.lastName.$errors[0]?.$message"
            />
            <BaseInput
                v-model:value="user.email"
                class="max-w-[20em]"
                placeholder="email"
                :error="v$.email.$errors[0]?.$message"
            />
            <BaseInput
                v-model:value="user.phone"
                maska="+7 (###) ###-##-##"
                class="max-w-[15em]"
                placeholder="phone"
                :error="v$.phone.$errors[0]?.$message"
            />
        </div>
        <BaseButton type="submit">Добавить в таблицу</BaseButton>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import { IUser } from '~/contracts/schema/user.ts'
import useVuelidate from '@vuelidate/core'
import { userSchema } from '~/validation/userSchema.ts'

const emit = defineEmits(['on-submit'])
const user = reactive<IUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
})

const v$ = useVuelidate(userSchema, user)

const submit = async () => {
    const isValid = await v$.value.$validate()

    if (isValid) {
        emit('on-submit', user)
    }
}
</script>
