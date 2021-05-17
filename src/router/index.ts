import AboutHome from "@/modules/about/components/AboutHome.vue";
import AboutImprint from "@/modules/about/components/AboutImprint.vue";
import AssetCreate from "@/views/AssetCreate.vue";
import AssetEdit from "@/views/AssetEdit.vue";
import Error from "@/views/Error.vue";
import FinancialStatement from "@/views/FinancialStatement.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/financial-statement",
    name: "financial-statement",
    component: FinancialStatement,
  },
  {
    path: "/financial-statement/asset/add",
    name: "asset-create",
    component: AssetCreate,
  },
  {
    path: "/financial-statement/asset/:assetId",
    name: "asset-edit",
    component: AssetEdit,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      { path: "", name: "about", component: AboutHome },
      { path: "imprint", name: "imprint", component: AboutImprint },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
