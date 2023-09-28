<template>
    <div v-if="store.isLoading" class="text-xl text-center">Загрузка...</div>
    <template v-else>
        <BaseInput v-model:value="search" class="mb-2" />
        <table class="w-full">
            <tbody>
                <UsersRow
                    v-for="user in usersData"
                    :key="user.id"
                    class="cursor-pointer transition-colors hover:bg-gray-100"
                    :class="{ 'cursor-default bg-gray-200': active?.email === user.email }"
                    :user="user"
                    @click="active = user"
                />
            </tbody>
        </table>
    </template>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUsersStore } from '~/store/useUsersStore.ts'
import UsersRow from '~/components/users/UsersRow.vue'
import { UserContract } from '~/contracts/user.ts'
import BaseInput from '~/components/base/BaseInput.vue'

const store = useUsersStore()
const active = ref<UserContract | null>(null)
const showBy = ref(5)
const search = ref('')

const usersData = computed<UserContract[]>(() => {
    const { users } = store

    const includes = (subj: number | string) => {
        return subj.toString().toLowerCase().includes(search.value.toLowerCase())
    }

    return users
        .filter((user) => {
            return (
                includes(user.id) ||
                includes(user.firstName) ||
                includes(user.lastName) ||
                includes(user.email) ||
                includes(user.phone)
            )
        })
        .slice(0, showBy.value)
})
</script>
