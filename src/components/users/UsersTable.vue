<template>
    <BaseInput v-model:value="store.search" class="mb-2" />
    <template v-if="store.usersData.length">
        <table class="table-fixed w-full text-sm">
            <UsersHead />
            <UsersBody />
        </table>
    </template>
    <div v-else class="text-7xl text-center mt-5">🤷</div>
</template>

<script setup lang="ts">
import { useUsersStore } from '~/store/useUsersStore.ts'
import BaseInput from '~/components/base/BaseInput.vue'
import UsersHead from '~/components/users/UsersHead.vue'
import UsersBody from '~/components/users/UsersBody.vue'

const store = useUsersStore()
</script>
