import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";



Vue.use(Vue2Editor);
Vue.use(ElementUI, {locale});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
