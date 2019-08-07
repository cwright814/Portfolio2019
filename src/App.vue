<template>
<div id="app">
    <NavBar/>
    <router-view/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

@Component({
    components: {
        NavBar
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    &:nth-child(2) {
        text-align: center;
        margin-top: 4rem;
    }
}
</style>
