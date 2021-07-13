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
    meta: {
      headerNavigation: undefined,
      headerTitle: undefined,
    },
  },
  {
    path: "/financial-statement",
    name: "financial-statement",
    component: FinancialStatement,
    meta: {
      headerNavigation: "",
      headerTitle: "Vermögensbilanz",
    },
  },
  {
    path: "/financial-statement/asset/add",
    name: "asset-create",
    component: AssetCreate,
    meta: {
      headerNavigation: "back",
      headerTitle: "Neue Anlage",
    },
  },
  {
    path: "/financial-statement/asset/:assetId",
    name: "asset-edit",
    component: AssetEdit,
    meta: {
      headerNavigation: "back",
      headerTitle: "Anlage bearbeiten",
    },
  },
  {
    path: "/financial-statement/asset-allocation",
    name: "asset-allocation",
    component: AssetAllocation,
    meta: {
      headerNavigation: "back",
      headerTitle: "Vermögensstruktur",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      headerNavigation: "back",
      headerTitle: "App-Informationen",
    },
    children: [
      {
        path: "",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/AboutHome.vue"),
        meta: {
          headerNavigation: "back",
          headerTitle: "App-Informationen",
        },
      },
      {
        path: "imprint",
        name: "imprint",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/components/AboutImprint.vue"
          ),
        meta: {
          headerNavigation: "back",
          headerTitle: "Impressum",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Error,
    meta: {
      headerNavigation: undefined,
      headerTitle: undefined,
    },
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
