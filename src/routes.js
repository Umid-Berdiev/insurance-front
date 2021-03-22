import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Home from "./components/Home.vue";
import Posts from "./components/Posts.vue";
import Questions from "./components/Questions.vue";
import Login from "./components/Login.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  {
    path: "/posts",
    component: Posts,
    meta: {
      auth: true,
    },
  },
  {
    path: "/questions",
    component: Questions,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: Login,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    next("/login");
    return;
  }
  next();
});

export default router;
