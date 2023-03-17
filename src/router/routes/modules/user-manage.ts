import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
    path: '/usermanage',
    name: 'usermanage',
    meta: {
        locale: 'menu.usermanage',
        requiresAuth: true,
        icon: 'icon-user-group',
    },
    component: () => import('@/views/user-manage/index.vue'),
};

export default DASHBOARD;
