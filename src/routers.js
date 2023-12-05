import Home from './components/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name: 'Home',
        component: Home,
        path: '/',
        exact: true
    },
    {
        name: 'admin',
        component: () => import('./components/admin/AdminFull.vue'),
        path: '/admin',
        redirect: '/admin/products',
        children: [
            {
                name: 'admin.products',
                component: () => import('./components/admin/Products.vue'),
                path: 'products',
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/' // Add this line
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;