import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Swipe, SwipeItem } from 'vant'
import 'amfe-flexible'
import 'vant/lib/index.css'
import './style/index.scss'
import './mockJs'

Vue.use(Vant)
Vue.use(Swipe)
Vue.use(SwipeItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
