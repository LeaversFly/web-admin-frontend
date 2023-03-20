import { AppRouteRecordRaw } from '../types';

const USERMANAGE: AppRouteRecordRaw = {
    path: '/usermanage',
    name: 'usermanage',
    meta: {
        locale: '用户管理',
        requiresAuth: true,
        icon: 'icon-user-group',
    },
    component: () => import('@/views/user-manage/index.vue'),
};

export default USERMANAGE;
