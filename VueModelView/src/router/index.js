import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/components/board/IndexMain.vue'),
    },
    {
        path: '/SearchAttraction',
        name: 'SearchAttraction',
        component: () => import('@/components/board/SearchAttraction.vue'),
    },
    {
        path: '/board',
        name: 'InfoBoard',
        component: () => import('@/components/board/InfoBoard.vue'),
    },
    {
        path: '/boardWrtie',
        name: 'InfoBoardWrite',
        component: () => import('@/components/board/InfoBoardWrite.vue'),
    },
    {
        path: '/boardView/:infono',
        name: 'InfoBoardView',
        component: () => import('@/components/board/InfoBoardView.vue'),
    },
    {
        path: '/boardDelete',
        name: 'InfoBoardDelete',
        component: () => import('@/components/board/InfoBoardDelete.vue'),
    },
    {
        path: '/boardModify',
        name: 'InfoBoardModify',
        component: () => import('@/components/board/InfoBoardModify.vue'),
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/components/board/test.vue'),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
