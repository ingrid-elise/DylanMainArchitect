import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyProcess from "../views/MyProcess.vue";
import WorkTogether from "../views/WorkTogether.vue";
import WhatIDo from "../views/WhatIDo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/whatido",
    name: "WhatIDo",
    component: WhatIDo
  },
  {
    path: "/myprocess",
    name: "MyProcess",
    component: MyProcess
  },
  {
    path: "/worktogether",
    name: "WorkTogether",
    component: WorkTogether
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
