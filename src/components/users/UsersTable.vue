<template>
    <BaseInput v-model:value="store.search" class="mb-2" />
    <template v-if="store.usersData.length">
        <div class="overflow-x-hidden md:overflow-x-visible">
            <div class="overflow-x-scroll md:overflow-x-visible">
                <table class="table-fixed w-full text-sm min-w-[45rem] md:min-w-0">
                    <UsersHead />
                    <UsersBody />
                </table>
            </div>
        </div>
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
