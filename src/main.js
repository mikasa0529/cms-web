// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElemengUi from 'element-ui'
import '@/style/public.scss'

Vue.use(ElemengUi);
Vue.config.productionTip = false;
Vue.prototype.$test = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
