<template>
<div class="demos">
    <h1>Demonstrations</h1>
    <p>You can find some demonstrations of my work here. In the future, I'd like to include client-side and server-side examples.</p>
    <p>By the way, this page was loaded lazily! (see router.ts)</p>
    <h3>External RESTful API Request (GET)</h3>
    <APICall request="https://reqres.in/api/users/3"/>
    <h3>My Other Work</h3>
    <ul>
        <li><a href="https://www.thewrightreason.com" target="_blank" rel="noopener">2016 Portfolio</a></li>
        <li><a href="https://www.youtube.com/watch?v=UWxKE7k_pv4" target="_blank" rel="noopener">"Trash House" Demo</a></li>
        <li><a href="https://www.thewrightreason.com/theforge" target="_blank" rel="noopener">AngularJS Demos</a></li>
        <li><a href="https://github.com/cwright814" target="_blank" rel="noopener">Personal GitHub</a></li>
        <li><a href="https://www.thewrightreason.com/resume2019" target="_blank" rel="noopener">Live Resume</a></li>
    </ul>
</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import APICall from "@/components/APICall.vue"; // @ is an alias to /src

@Component({
    components: {
        APICall
    }
})
export default class Demos extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/sass/Body.scss";
</style>
