import Vue from "vue";
import VueRouter from "vue-router";
import tooltipSimple from "../views/tooltipSimple.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tooltipSimple",
    component: tooltipSimple
  },
  {
    path: "/move",
    name: "move",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/move.vue")
  },
  {
    path: "/gradient",
    name: "gradient",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/gradient.vue")
  },
  {
    path: "/magnifie",
    name: "magnifie",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/magnifie.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
