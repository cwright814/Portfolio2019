import Vue from "vue";
import Router from "vue-router";
import Intro from "./views/Intro.vue";
import Experience from "./views/Experience.vue";

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
            component: Experience
        },
        {
            path: "/demos",
            name: "demos",
            // route level code-splitting
            // this generates a separate chunk (demos.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demos" */ "./views/Demos.vue")
        }
    ]
});
