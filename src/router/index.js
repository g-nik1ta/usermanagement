import Vue from 'vue'
import VueRouter from 'vue-router'

import UsersLayout from '@/layouts/UsersLayout'
import StartPages from '@/components/UsersHome/StartPages'
import UserInfo from '@/components/UsersHome/UserInfo/UserInfo'
import UserContactInfo from '@/components/UsersHome/UserInfo/UserContactInfo'
import UserRolesInfo from '@/components/UsersHome/UserInfo/UserRolesInfo'

import UsersFullListLayout from '@/layouts/UsersFullListLayout'

import CreateUserLayout from '@/layouts/CreateUserLayout'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: 'users-list',
        component: UsersLayout,
        children: [
            {
                path: 'users-list',
                name: 'startPages',
                component: StartPages
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
    {
        path: '/users-full-list',
        name: 'usersFullListLayout',
        component: UsersFullListLayout
    },
    {
        path: '/create-user',
        name: 'createUserLayout',
        component: CreateUserLayout
    },
    {
        path: '/usermanagement',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
