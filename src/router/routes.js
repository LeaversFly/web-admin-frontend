const routes = [
    {
        path: '/',
        component: () => import('../views/home.vue')
    },
    {
        path: '/user',
        component: () => import('../views/user.vue')
    },
    {
        path: '/file',
        component: () => import('../views/file.vue')
    },
    {
        path: '/login',
        meta: { show: true },
        component: () => import('../views/login.vue')
    },
]

export default routes