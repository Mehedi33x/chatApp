import { createWebHistory, createRouter } from "vue-router";
import Swal from "sweetalert2";

const guestRoutes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("../pages/auth/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../pages/auth/Register.vue"),
    },
];
const authRoutes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../layouts/ChatLayouts.vue"),
    },
];
const fallbackRoute = {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
};
const routes = [...authRoutes, ...guestRoutes, fallbackRoute];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const isGuestRoute = guestRoutes.some((route) => route.name === to.name);
    const isAuthRoute = authRoutes.some((route) => route.name === to.name);
    console.log(isGuestRoute, isAuthRoute, token, user);
    if (isGuestRoute && token) {
        console.log("token");
        return next("/");
    }
    if (isAuthRoute && !token) {
        console.log("no token");
        return next("/login");
    }
    next();
});

export default router;
