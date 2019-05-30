import Vue from 'vue';
import App from './views/App/App.vue';
import router from './router';
import store from './shared/store/index';

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
