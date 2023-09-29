<template>
    <tbody>
        <UsersRow
            v-for="(user, key) in store.usersData"
            :key="key"
            class="cursor-pointer transition-colors hover:bg-gray-100"
            :class="{
                'cursor-default bg-gray-200': store.active?.email === user.email,
            }"
            :user="user"
            @click="store.active = user"
        />
    </tbody>
</template>

<script setup lang="ts">
import UsersRow from '~/components/users/UsersRow.vue'
import { useUsersStore } from '~/store/useUsersStore.ts'

const store = useUsersStore()
</script>
