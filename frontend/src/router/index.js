import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/login",
			name: "login",

			//  lazy-loaded when the route is visited.
			component: () => import("../views/LoginView.vue"),
		},
		{
			path: "/register",
			name: "register",

			component: () => import("../views/RegisterView.vue"),
		},
		{
			path: "/search",
			name: "search",

			component: () => import("../views/SearchView.vue"),
		},
	],
});

export default router;
