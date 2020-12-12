import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Past from "@/views/Past.vue";
import Present from "@/views/Present.vue";
import Future from "@/views/Future.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/past",
    name: "Past",
    component: Past,
  },
  {
    path: "/",
    name: "Present",
    component: Present,
  },
  {
    path: "/future",
    name: "Future",
    component: Future,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
