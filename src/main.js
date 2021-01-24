import Vue from "vue";
import App from "./App.vue";

import "./index.css";

Vue.config.productionTip = false;

new Vue({
  data: {},
  render: h => h(App)
}).$mount("#app");
