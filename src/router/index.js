import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersHome from '@/pages/UsersHome.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: UsersHome        
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
