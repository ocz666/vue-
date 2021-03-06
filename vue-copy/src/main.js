import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./style/main.scss";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import icon from "./icons/index"


Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
