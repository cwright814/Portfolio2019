<template>
<div id="app">
    <NavBar/>
    <div class="h-100 container-fluid d-flex flex-column">
        <div class="row flex-grow-0">
            <div class="col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3">
                <router-view/>
            </div>
        </div>
        <Footer/>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue";

@Component({
    components: {
        NavBar,
        Footer
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/sass/DefaultTheme.scss";
$nav-offset: 4.5rem;

html,body,#app {
    height: calc(100vh - #{$nav-offset}) !important;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: map-get($theme-colors, "text");
    &:nth-child(2) {
        text-align: center;
        margin-top: $nav-offset;
    }
}
// Workarounds for Internet Explorer
.flex-grow-0 {
    flex: 0 0 auto;
}
.flex-grow-1 {
    flex: 1 1 auto;
}
</style>
