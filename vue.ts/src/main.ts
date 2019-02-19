import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// ! 在ts中引入文件必须指定到相应的文件，index不可以省略，不然会找不到文件
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
