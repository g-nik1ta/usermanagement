import Vue from 'vue'
import VueRouter from 'vue-router'

import UsersLayout from '@/layouts/UsersLayout.vue'
import CreateUser from '@/pages/CreateUser.vue'
import UserInfo from '@/pages/UserInfo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'UsersHome',
        component: UsersLayout,
        children: [
            {
                path: '',
                name: 'CreateUser',
                component: CreateUser
            },
            {
                path: '/user',
                name: 'UserInfo',
                component: UserInfo
            }
        ]     
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
