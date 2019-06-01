import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main/MainPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'main',
      component: Main,
    },
  ],
});
