import Vue from "vue";
import Vuex from "vuex";
import { shopConfig } from "./shopConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shopConfig,
  },
});
