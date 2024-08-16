import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "~Home🍩🏡",
            component: HomeView
        },
        {
            path: "/about",
            name: "💻About👨🏿‍🦱",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../pages/AboutPage.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import("../pages/40UhOh.vue"),
            meta: {title: "404 - Page Not Found"}
        }
    ],
    linkActiveClass: "is-active",
});

export default router;
