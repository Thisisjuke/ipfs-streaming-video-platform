import Vue from 'vue';
import ElementUI from 'element-ui';
import VueApexCharts from 'vue-apexcharts';
import 'element-ui/lib/theme-chalk/index.css';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/tailwind.css';

sync(store, router);
Vue.component('apexchart', VueApexCharts);
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
