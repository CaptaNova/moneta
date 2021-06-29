import AssetAllocation from "@/views/AssetAllocation.vue";
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
    path: "/financial-statement/asset-allocation",
    name: "asset-create",
    component: AssetAllocation,
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
      {
        path: "",
        name: "about",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/components/about/AboutHome.vue"
          ),
      },
      {
        path: "imprint",
        name: "imprint",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/components/about/AboutImprint.vue"
          ),
      },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
