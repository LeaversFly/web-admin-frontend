const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/setting',
        component: () => import('../views/Setting.vue')
    },
    {
        path: '/works',
        component: () => import('../views/Works.vue')
    },
    {
        path: '/login',
        meta: { show: true },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/competition',
        component: () => import('../views/Competition.vue')
    },
    {
        path: '/score',
        component: () => import('../views/Score.vue')
    },
    {
        path: '/notify',
        component: () => import('../views/Notify.vue')
    },
]

export default routes