<template>
    <BaseLayout title="Пользователи" :is-loading="store.isLoading">
        <UsersTable />
        <UsersPagination class="mt-5" />
    </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '~/components/base/BaseLayout.vue'
import UsersTable from '~/components/users/UsersTable.vue'
import UsersPagination from '~/components/users/UsersPagination.vue'
import { useUsersStore } from '~/store/useUsersStore.ts'

const store = useUsersStore()
</script>
