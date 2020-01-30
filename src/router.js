import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Blogs from "./views/Blogs.vue";
import Skills from "./views/Skills.vue";
import Contacts from "./views/Contacts.vue";
import Clients from "./views/Clients.vue";
import Projects_pcb from "./views/Projects_pcb.vue";
import Projects_web from "./views/Projects_web.vue";
import Projects_product from "./views/Projects_product.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills

    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/clients",
      name: "clients",
      component: Clients
    },
    {
      path: "/projects/pcb_designs",
      name: "projects_pcb",
      component: Projects_pcb
    },
    {
      path: "/projects/web_designs",
      name: "projects_web",
      component: Projects_web
    },
    {
      path: "/projects/product_designs",
      name: "projects_product",
      component: Projects_product
    },
  ]
});