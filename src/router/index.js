import Vue from 'vue'
import VueRouter from 'vue-router'

import UsersLayout from '@/layouts/UsersLayout'
import CreateUser from '@/pages/CreateUser'
import UserInfo from '@/pages/UserInfo'
import UserContactInfo from '@/components/UsersHome/UserContactInfo'
import UserRolesInfo from '@/components/UsersHome/UserRolesInfo'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: 'users-list',
        component: UsersLayout,
        children: [
            {
                path: 'users-list',
                name: 'createUser',
                component: CreateUser
            },
            {
                path: 'user_:id',
                component: UserInfo,
                children: [
                    {
                        path: 'general-info',
                        name: 'userContactInfo',
                        component: UserContactInfo
                    },
                    {
                        path: 'roles-info',
                        name: 'userRolesInfo',
                        component: UserRolesInfo
                    },
                ]
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
