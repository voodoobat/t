<template>
    <thead>
        <tr>
            <UsersHeadCel text="id" prop="id" />
            <UsersHeadCel text="firstName" prop="firstName" />
            <UsersHeadCel text="lastName" prop="lastName" />
            <UsersHeadCel text="email" prop="email" />
            <UsersHeadCel text="phone" prop="phone" />
        </tr>
    </thead>
</template>

<script setup lang="ts">
import UsersHeadCel from '~/components/users/UsersHeadCel.vue'
</script>
