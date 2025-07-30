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
    console.log(user,token);
    
    const authRouteNames = authRoutes.map((r) => r.name);
    const isAuthRoute = authRouteNames.includes(to.name);
    if (isAuthRoute && !token) {
        return next("/login");
    }
    if (!isAuthRoute && token) {
        return next("/");
    }
    next();
});

export default router;
