import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '~/views/HomeView.vue'
import UsersView from '~/views/UsersView.vue'

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
            name: 'users-short',
            component: UsersView,
        },
        {
            path: '/large',
            name: 'users-large',
            component: UsersView,
        },
    ],
})
