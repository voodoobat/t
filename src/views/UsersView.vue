<template>
    <BaseLayout title="Пользователи" :is-loading="store.isLoading">
        <UsersTable />
        <UsersPager class="mt-5" />
    </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '~/components/base/BaseLayout.vue'
import UsersTable from '~/components/users/UsersTable.vue'
import UsersPager from '~/components/users/UsersPager.vue'
import { useUsersStore } from '~/store/useUsersStore.ts'

const store = useUsersStore()
</script>
