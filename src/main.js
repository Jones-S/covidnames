import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: App },
  ]
})

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
