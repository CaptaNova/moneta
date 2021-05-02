import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AssetCreate from "@/views/AssetCreate.vue";
import FinancialStatement from "@/views/FinancialStatement.vue";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/financial-statement",
    name: "FinancialStatement",
    component: FinancialStatement,
  },
  {
    path: "/financial-statement/asset/add",
    name: "AssetCreate",
    component: AssetCreate,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
