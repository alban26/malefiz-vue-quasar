import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Gameboard from "../views/Gameboard";
import Login from "../views/Login"
import Register from "../views/Register";
import store from "../store";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/gameboard',
        name: 'Gameboard',
        component: Gameboard,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.GET_SIGNEDIN) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router
