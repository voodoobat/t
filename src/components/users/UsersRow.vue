<template>
    <tr class="border-b border-gray-200">
        <td class="p-2">{{ user.id }}</td>
        <td class="p-2">{{ user.firstName }}</td>
        <td class="p-2">{{ user.lastName }}</td>
        <td class="p-2">{{ user.email }}</td>
        <td class="p-2">{{ user.phone }}</td>
    </tr>
</template>

<script setup lang="ts">
import { UserContract } from '~/contracts/user.ts'

defineProps<{
    user: UserContract
}>()
</script>
