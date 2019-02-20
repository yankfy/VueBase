import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// ! 在ts中引入文件必须指定到相应的文件，index不可以省略，不然会找不到文件
import store from "./store/index";

// ! mock 数据
import mock from "./mock/index";
mock.bootstrap();
// ! axios 请求
import axios from "@/utils/ajax";
import vueAxios from "vue-axios";

// ! 引入iview element-ui框架
import { Table, Checkbox, Input, FormItem, Form, Button } from "iview";
import { Loading, Notification } from "element-ui";
import "iview/dist/styles/iview.css";
Vue.component("Checkbox", Checkbox);
Vue.component("Input", Input);
Vue.component("FormItem", FormItem);
Vue.component("Form", Form);
Vue.component("Button", Button);
Vue.component("Loading", Loading);
Vue.component("Table", Table);
Vue.component("Notification", Notification);

// ! 引入viser Vue
import Viser from "viser-vue";
Vue.use(Viser);

Vue.config.productionTip = false;

// ! axios 请求
Vue.use(vueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
