import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload, Swipe, SwipeItem } from 'vant'
import axios from 'axios'

import 'amfe-flexible'
import 'vant/lib/index.css'
import './style/index.scss'
import './mockJs'
import './utils/day'

Vue.use(Lazyload)

Vue.use(Vant)
Vue.use(Swipe)
Vue.use(SwipeItem)
// Vue.use(axios)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
