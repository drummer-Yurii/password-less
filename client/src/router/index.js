import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import vm from '../main';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.query.session_token) {
        localStorage.setItem('session_token', to.query.session_token)
        router.replace({ 'query': null })
    }

    const token = localStorage.getItem('session_token') || null

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (token) {
            // Request to api to verify token
        } else {
            next('/login')
            return;
        }
    } else if (to.matched.some(record => record.name === 'login')) {
        if (token) {
            // Verify token on api
            next('/');
            return;
        }
    }
    next();
})

export default router;