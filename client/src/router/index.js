import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import vm from '../main';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;