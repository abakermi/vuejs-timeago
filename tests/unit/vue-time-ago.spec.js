import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import VueTimeAgo from "@/components/VueTimeAgo.vue";

describe("VueTimeAgo.vue", () => {
  it("redner time ago", async () => {
    const date="2020-08-07T11:32:01.592Z"
    const format="DD-MM-YYYY"
    const iso=true
    const wrapper = shallowMount(VueTimeAgo, {
      propsData: { date,format,iso }
    });
   
    expect(wrapper.find(".vue-time-ago").exists()).to.be.true;
  });
});
