const routes = [
    {
        path: '/',
        component: () => import('../views/home.vue')
    },
    {
        path: '/authority',
        component: () => import('../views/authority.vue')
    },
    {
        path: '/login',
        meta: { show: true },
        component: () => import('../views/Login.vue')
    },
]

export default routes