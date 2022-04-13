import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';


const routes = [{
    path: '/',
    redirect: '/home',
    component: () =>
        import ('../components/DefaultLayout.vue'),
    children: [{
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../pages/Home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('../pages/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('../pages/SignUp.vue')
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: () =>
                import ('../pages/Dashboard.vue')
        }
    ]
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;