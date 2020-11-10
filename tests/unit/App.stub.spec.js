import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  const localVue = createLocalVue();

  it("ボタンをクリックするとカウントが増える", async () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: {
        "v-btn": true
      }
    });

    const btn = wrapper.find(`[data-test="btn"]`);

    btn.trigger("click");
    expect(wrapper.vm.$data.count).toBe(0); // trigger しても 0 のまま

    btn.vm.$emit("click");
    expect(wrapper.vm.$data.count).toBe(1); // emit すると増える
  });
});
