<template>
    <LayoutDefault title="Пользователи" :is-loading="store.isLoading">
        <UsersTable />
        <UsersFoot class="mt-5" />
    </LayoutDefault>
</template>

<script setup lang="ts">
import LayoutDefault from '~/components/layout/LayoutDefault.vue'
import UsersTable from '~/components/users/UsersTable.vue'
import UsersFoot from '~/components/users/UsersFoot.vue'
import { useUsersStore } from '~/store/useUsersStore.ts'

const store = useUsersStore()
</script>
