import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main/MainPage.vue';
import Upload from './views/Upload/UploadPage.vue';
import TransactionPage from './views/Transaction/TransactionPage.vue';

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
    {
      path: '/upload',
      name: 'upload',
      component: Upload,
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionPage,
    },
  ],
});
