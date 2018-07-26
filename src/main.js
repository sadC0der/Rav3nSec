// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import DateFilter from './filters/date'

Vue.use(Vuetify, {
  theme: {
    primary: '#2196F3',
    secondary: '#304FFE',
    accent: '#2962FF',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

Vue.component('Header', Header)
Vue.component('Footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
