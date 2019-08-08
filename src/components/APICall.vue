<template>
<div class="api-call">
    {{ request }} =
    <pre>{{ response }}</pre>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {HttpResponse} from "vue-resource/types/vue_resource";

@Component
export default class APICall extends Vue {
    // Property example
    @Prop(String) private readonly request!: string; // Trailing ! disallows null values

    // Data example
    private response: string = "...";

    // Inherited method example (async optional)
    private async mounted(): Promise<void> {
        const testResponse: HttpResponse = await this.requestTest();
        this.response = await testResponse.text();
    }

    // Custom method example (async optional)
    private async requestTest(): Promise<HttpResponse> {
        return this.$http.get(this.request);
    }
}
</script>

<style scoped lang="scss">
pre {
    white-space: pre-wrap;
    word-break: break-word;
}
</style>
