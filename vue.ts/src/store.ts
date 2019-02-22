import Vue from "vue";
import Vuex from "vuex";
import count from "./pages/count/store/index";
import info from "./pages/info/store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    info
  }
});
