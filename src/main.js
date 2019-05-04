import Vue from 'vue'

import './plugins/vuetify'
import App from './App.vue'

import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'//font-awesome字体图标
import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
