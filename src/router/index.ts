import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: () => import('@/pages/login/index.vue')
},{
    path: '/reg',
    component: () => import('@/pages/reg/index.vue')
},{
    path: '/manage',
    component: () => import('@/pages/manage/index.vue'),
    children: [
        {
            path: 'user',
            name: 'user',
            component: () => import('@/pages/system/user/index.vue')
        },
        {
            path: 'main',
            name: 'main',
            component: () => import('@/pages/manage/main/index.vue')
        },
        {
            path: 'role',
            name: 'role',
            component: () => import('@/pages/system/role/index.vue')
        },
        {
            path: 'dispose',
            name: 'dispose',
            component: () => import('@/pages/system/dispose/index.vue')
        },
        {
            path: 'classifi',
            name: 'classifi',
            component: () => import('@/pages/article/classification/index.vue')
        },
        {
            path: 'admin',
            name: 'admin',
            component: () => import('@/pages/article/Administration/index.vue')
        },
        {
            path: 'big_screen',
            name: 'big_screen',
            component: ()=>import('@/pages/charts/big_screen/index.vue')
        },
        {
            path: 'standard',
            name: 'standard',
            component: () => import('@/pages/charts/standard/index.vue')
        },
    ]
}
]
 
 
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
 
//导出router
export default router