import { createWebHistory, createRouter } from "vue-router";
import Library from "@/views/Library.vue";
import AddMovie from "@/views/AddMovie.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Library",
    component: Library,
  },
  {
    path: "/AddMovie",
    name: "Add Movie",
    component: AddMovie,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;