const routes = [
    {
        path: '/',
        component: () => import('../views/home.vue')
    },
    {
        path: '/setting',
        component: () => import('../views/Setting.vue')
    },
    {
        path: '/login',
        meta: { show: true },
        component: () => import('../views/Login.vue')
    },
]

export default routes