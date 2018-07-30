// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import AlertCmp from './components/Shared/Alert'
import DateFilter from './filters/date'
import EditPost from './components/Pages/Blog/Edit/EditPostDetails'

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

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-post-details', EditPost)

Vue.filter('date', DateFilter)

Vue.component('Header', Header)
Vue.component('Footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCMCNJe0_pckH3zPxGSJo4PaMYxFBjudjg',
      authDomain: 'rav3nsec-6610b.firebaseapp.com',
      databaseURL: 'https://rav3nsec-6610b.firebaseio.com',
      projectId: 'rav3nsec-6610b',
      storageBucket: 'rav3nsec-6610b.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadPosts')
  }
})
