import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta';

import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMeta);

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
