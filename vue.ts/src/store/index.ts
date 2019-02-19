import Vue from "vue";
import Vuex from "vuex";
import count from "./module/count/index";
import info from "./module/info/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count: count,
    info: info
  }
});
