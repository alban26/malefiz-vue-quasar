import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    // {
    //     path: '/gameboard',
    //     name: 'Gameboard',
    //     component: Gameboard,
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
