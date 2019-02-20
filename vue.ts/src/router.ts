import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
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
        import(/* webpackChunkName: "about" */ "./views/Viser.vue")
    }
  ]
});
