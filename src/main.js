import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import scrollanimation from './directives/scrollanimation.js'; 

Vue.directive('scrollanimation', scrollanimation); // registering the directive globally

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
