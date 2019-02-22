import Vue from "vue";
import Router from "vue-router";
import About from "./pages/about/About.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/",
      name: "viser",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./pages/viser/Viser.vue")
    },
    {
      path: "/count",
      name: "count",
      component: () => import("./pages/count/Count.vue"),
      children: [
        {
          path: "info",
          name: "info",
          component: () => import("./pages/info/Info.vue")
        }
      ]
    }
  ]
});
