import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import {useAuthStore} from "../stores/auth.js";

const routes = [
  { path: "/", name: "Home", component: Home, meta: { requiresAuth: true }},

  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),

  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/password-reset/:token",
    name: "ResetPassword",
    component: () => import("../components/ResetPassword.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    await useAuthStore().isAuthenticated();
  }
})

export default router;
