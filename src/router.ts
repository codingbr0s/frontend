import Vue from 'vue';
import Router from 'vue-router';
import App from './views/App/App.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'app',
      component: App,
    },
  ],
});
