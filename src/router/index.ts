import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {selector: to.hash}
        }

        return {top: 0}
    },
    routes: [
        {
            path: "/",
            name: "~Home🍩🏡",
            component: HomeView
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import("../pages/40UhOh.vue"),
            meta: {title: "404 - Page Not Found"}
        }
    ],
    // linkActiveClass: "is-active",
});

export default router;
