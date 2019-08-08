import {expect} from "chai";
import {shallowMount} from "@vue/test-utils";
import APICall from "@/components/APICall.vue";

describe("APICall.vue", () => {
    it("outputs GET request when passed", () => {
        const request: string = "https://reqres.in/api/users/1";
        const wrapper = shallowMount(APICall, {
            propsData: {request}
        });
        expect(wrapper.text()).to.include(request);
    });
});
