import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
// import 'firebase/analytics'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'
import 'firebase/firebase-storage'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSTK-TX-cO109uoDtrUvq6HPF7KYHHO-4',
      authDomain: 'itc-ads-6fe97.firebaseapp.com',
      databaseURL: 'https://itc-ads-6fe97.firebaseio.com',
      projectId: 'itc-ads-6fe97',
      storageBucket: 'itc-ads-6fe97.appspot.com',
      messagingSenderId: '498992566440',
      appId: '1:498992566440:web:36c078b476f2774f0b729d',
      measurementId: 'G-8K12PJT499'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    // firebase.analytics()
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
