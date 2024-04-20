import Home from './components/Home.vue'
import Company from './components/Company.vue'
import Guide from './components/Guide.vue'
import Terms from './components/Terms.vue'
import Valiosa from './components/Valiosa.vue'

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
        name: 'Guide',
        component: Guide,
        path: '/guide',
        exact: true
    },
    {
        name: 'Terms',
        component: Terms,
        path: '/terms',
        exact: true
    },
    {
        name: 'VALIOSA',
        component: Valiosa,
        path: '/valiosa',
        exact: true
    },
    {
        name: 'admin',
        component: AdminFull,
        path: '/admin',
        children: [
            {
                name: 'admin.products',
                component: Products,
                path: '2134dfghds/products',
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