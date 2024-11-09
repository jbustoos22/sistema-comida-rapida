// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Contact from "../views/Contact.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/menu", name: "Menu", component: Menu },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/product-details", name: "ProductDetails", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
