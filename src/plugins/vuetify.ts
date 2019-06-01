import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';
import { Ripple } from 'vuetify/es5/directives';

Vue.use(Vuetify, {
  theme: {
    primary: '#16264d',
    secondary: '#bcc2cf',
    accent: '#d4d8df',
    error: '#b71c1c',
    success: '#8cbe32',
  },
  iconfont: 'md',
  directives: {
    Ripple,
  },
});
