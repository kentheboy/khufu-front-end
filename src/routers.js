import Home from './components/Home.vue'
import Company from './components/Company.vue'

import AdminFull from './components/admin/AdminFull.vue'
import Products from './components/admin/Products.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name: 'Home',
        component: Home,
        path: '/',
        exact: true
    },
    {
        name: 'Company',
        component: Company,
        path: '/company',
        exact: true
    },
    {
        name: 'admin',
        component: AdminFull,
        path: '/admin',
        redirect: '/admin/products',
        children: [
            {
                name: 'admin.products',
                component: Products,
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