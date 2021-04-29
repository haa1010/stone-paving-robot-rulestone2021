import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import el from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)
Vue.use(el)

Vue.config.productionTip = false

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://runestone2021.herokuapp.com';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')