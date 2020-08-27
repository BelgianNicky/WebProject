import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/reparation",
    name: "Reparation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Reparation.vue"),
  },
  {
    path: "/config",
    name: "Config",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Config.vue"),
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Catalogue.vue"),
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Connexion.vue"),
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inscription.vue"),
  },
  {
    path: "/panier",
    name: "Panier",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Panier.vue"),
  },
  {
    path: "/payer",
    name: "Payer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Payer.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
