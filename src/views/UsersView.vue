<template>
    <LayoutDefault title="Пользователи" :is-loading="store.isLoading">
        <div class="users-header">
            <BaseInput
                v-model:value="store.search"
                class="w-full md:w-1/3"
                @input="store.page = 1"
            />
            <BaseButton @click="isOpenModal = true">Добавить</BaseButton>
            <LayoutModal
                :is-open="isOpenModal"
                title="Добавление пользователя"
                @close="isOpenModal = false"
            >
                <UsersForm @submit="addUser" />
            </LayoutModal>
        </div>
        <div class="overflow-x-hidden md:overflow-x-visible">
            <div class="overflow-x-scroll md:overflow-x-visible">
                <BaseTable
                    v-if="store.usersData.length"
                    class="users-table"
                    :data="store.usersData as any[]"
                    :sort="store.sort as IBaseTableSort"
                    :columns="[
                        { name: 'id', key: 'id' },
                        { name: 'First Name', key: 'firstName' },
                        { name: 'Last Name', key: 'lastName' },
                        { name: 'Email', key: 'email' },
                        { name: 'Phone', key: 'phone' },
                    ]"
                    @sort="sortUsers"
                />
                <div v-else class="text-7xl text-center">🤷‍♀️</div>
            </div>
        </div>
        <div class="users-footer">
            <BasePager
                :active="store.page"
                :size="store.showBy"
                :total="store.searchResults.length"
                @change="(page) => (store.page = page)"
            />
            <BaseSelect
                v-model:value="store.showBy"
                label="Rows per page"
                :options="showByOptions"
                @change="store.page = 1"
            />
        </div>
    </LayoutDefault>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { IBaseTableSort } from '~/contracts/components/baseTable.ts'

import LayoutDefault from '~/components/layout/LayoutDefault.vue'
import LayoutModal from '~/components/layout/LayoutModal.vue'
import BasePager from '~/components/base/BasePager.vue'
import BaseSelect from '~/components/base/BaseSelect.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import BaseTable from '~/components/base/BaseTable.vue'
import UsersForm from '~/components/users/UsersForm.vue'

import { useUsersStore } from '~/store/useUsersStore.ts'
import { IUser } from '~/contracts/schema/user.ts'
import { NonOptionalKeys } from '~/contracts/generics.ts'

const store = useUsersStore()
const isOpenModal = ref(false)

const showByOptions = computed(() => [
    { value: 5, text: '5' },
    { value: 25, text: '25' },
    { value: 50, text: '50' },
    { value: store.users.length, text: 'ВСЕ' },
])

const sortUsers = (key: NonOptionalKeys<IUser>) => {
    const { direction } = store.sort

    if (store.sort?.key === key) {
        return (store.sort.direction = direction === 'DESC' ? 'ASC' : 'DESC')
    }

    store.sort = {
        direction: direction || 'ASC',
        key,
    }
}

const addUser = (user: IUser) => {
    store.add(user)
    isOpenModal.value = false
    store.sort.key = ''
}
</script>

<style scoped>
.users-header {
    @apply flex
        flex-col-reverse
        md:flex-row
        gap-4
        justify-between
        items-center
        mb-6;
}

.users-table {
    @apply table-fixed w-full text-sm;
}

.users-table :deep th:first-child {
    @apply w-16;
}

.users-footer {
    @apply flex
        flex-col-reverse
        md:flex-row
        justify-between
        gap-6
        pt-8
        pb-6;
}
</style>
