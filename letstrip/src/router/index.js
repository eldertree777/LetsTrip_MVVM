import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "indexMain",
        component: () => import("@/components/board/IndexMain.vue"),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
