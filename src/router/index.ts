import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '~/views/HomeView.vue'
import UsersView from '~/views/UsersView.vue'
import { useUsersStore } from '~/store/useUsersStore.ts'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/small',
            name: 'users-small',
            component: UsersView,
            beforeEnter() {
                useUsersStore().fetch(32)
            },
        },
        {
            path: '/large',
            name: 'users-large',
            component: UsersView,
            beforeEnter() {
                useUsersStore().fetch(999)
            },
        },
    ],
})
