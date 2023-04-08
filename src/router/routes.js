const routes = [
    {
        path: '/',
        component: () => import('../views/home.vue'),
        meta: {
            icon: 'Odometer',
            title: '首页'
        }
    },
    {
        path: '/user',
        component: () => import('../views/user.vue'),
        meta: {
            icon: 'Avatar',
            title: '用户管理'
        }

    },
    {
        path: '/file',
        component: () => import('../views/file.vue'),
        meta: {
            icon: 'Files',
            title: '文件管理'
        }
    },
    {
        path: '/setting',
        component: () => import('../views/setting.vue'),
        meta: {
            icon: 'Setting',
            title: '设置'
        }
    },
]

export default routes