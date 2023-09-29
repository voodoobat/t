<template>
    <BaseInput v-model:value="store.search" class="mb-2" />
    <template v-if="store.usersData.length">
        <table class="table-fixed w-full text-sm">
            <thead>
                <tr>
                    <UsersHeadCel text="id" prop="id" />
                    <UsersHeadCel text="firstName" prop="firstName" />
                    <UsersHeadCel text="lastName" prop="lastName" />
                    <UsersHeadCel text="email" prop="email" />
                    <UsersHeadCel text="phone" prop="phone" />
                </tr>
            </thead>
            <tbody>
                <UsersRow
                    v-for="(user, key) in store.usersData"
                    :key="key"
                    class="cursor-pointer transition-colors hover:bg-gray-100"
                    :class="{ 'cursor-default bg-gray-200': store.active?.email === user.email }"
                    :user="user"
                    @click="store.active = user"
                />
            </tbody>
        </table>
    </template>
    <div v-else class="text-7xl text-center mt-5">🤷</div>
</template>

<script setup lang="ts">
import { useUsersStore } from '~/store/useUsersStore.ts'
import UsersRow from '~/components/users/UsersRow.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import UsersHeadCel from '~/components/users/UsersHeadCel.vue'

const store = useUsersStore()
</script>
