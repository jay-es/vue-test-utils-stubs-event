// 本当はグローバルなプラグイン登録はセットアップファイルでやる
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

// ここからが本来のテストファイルの内容
import { createLocalVue, mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("ボタンをクリックするとカウントが増える", () => {
    const wrapper = mount(App, {
      localVue,
      vuetify
    });

    const btn = wrapper.find(`[data-test="btn"]`);

    // trigger でイベント発火
    btn.trigger("click");

    expect(wrapper.vm.$data.count).toBe(1);
  });
});
