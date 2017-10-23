import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import router from './router';
import App from './App';

Vue.use(VueRouter);

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
