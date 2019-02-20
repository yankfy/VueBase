import Vue from "vue";
import Vuex from "vuex";
import count from "./vuex_count/index";
import info from "./vuex_info/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    info
  }
});
