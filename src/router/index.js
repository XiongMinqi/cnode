import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/index"
  },
  {
    path: "/index",
    component: Home,
    children: [
      {
        path: "",
        name:"index",
        component: Index
      }
    ]
  },
  {
    path: "/shuju",
    component: Home,
    children: [
      {
        path: "",
        name:"shuju",
        component: () => import("../components/Shuju/Shuju.vue")
      }
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
