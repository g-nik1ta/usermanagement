import Vue from 'vue'
import VueRouter from 'vue-router'

import UsersLayout from '@/layouts/UsersLayout.vue'
import CreateUser from '@/pages/CreateUser.vue'
import UserInfo from '@/pages/UserInfo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: UsersLayout,
        children: [
            {
                path: '',
                name: 'createUser',
                component: CreateUser
            },
            {
                path: '/user/:id',
                name: 'userInfo',
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
