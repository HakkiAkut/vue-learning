import Vue from "vue";
import Vuex from "vuex";
import items from "./modules/items";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { items },
});
