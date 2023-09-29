<template>
    <div class="flex flex-col-reverse md:flex-row gap-4 justify-between items-center mb-2">
        <BaseInput v-model:value="store.search" class="w-full md:w-1/3" />
        <BaseButton @click="modal = true">Добавить</BaseButton>
    </div>
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
    <LayoutModal :is-open="modal" title="Добавление пользователя" @close="modal = false">
        <UsersForm />
    </LayoutModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsersStore } from '~/store/useUsersStore.ts'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import UsersHead from '~/components/users/UsersHead.vue'
import UsersBody from '~/components/users/UsersBody.vue'
import UsersForm from '~/components/users/UsersForm.vue'
import LayoutModal from '~/components/layout/LayoutModal.vue'

const modal = ref(false)

const store = useUsersStore()
</script>
