import Vue from 'vue';
import './plugins/vuetify';
import App from './views/App/App.vue';
import router from './router';
import store from './shared/store/index';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);


new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
