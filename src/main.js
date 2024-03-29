import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
