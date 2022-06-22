import Vue from "vue";
import VueRouter from "vue-router";
import RegisterPage from "../components/RegisterPage.vue"
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import DashBoard from '../views/DashBoard.vue'

Vue.use(VueRouter);
function guest (to, from, next) {
  if(localStorage.activeUser) {
    next({ name: "Dashboard" });
  }else next();
}

function guard (to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else next ({name: "Login"})
}

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage,
    beforeEnter: guest
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    beforeEnter: guest
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    beforeEnter: guest
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashBoard,
    beforeEnter: guard
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
