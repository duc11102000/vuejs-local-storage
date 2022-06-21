import Vue from "vue";
import VueRouter from "vue-router";
import RegisterPage from "../components/RegisterPage.vue"
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import DashBoard from '../views/DashBoard.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashBoard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
