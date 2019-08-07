import Vue from "vue";
import Router from "vue-router";
import Intro from "./views/Intro.vue";
import APIExample from "./views/APIExample.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "intro",
            component: Intro
        },
        {
            path: "/experience",
            name: "experience",
            component: APIExample
        },
        {
            path: "/examples",
            name: "examples",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});
