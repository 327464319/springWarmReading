import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    children: [
      { path: '/my', component: () => import('../views/My') },
      { path: '/bookmall', component: () => import('../views/BookMall') },
      { path: '/bookrack', component: () => import('../views/BookRack') }
    ]
  },
  { path: '/login', component: () => import('../views/Login') },
  { path: '/bookinterface', name: 'bookInterface', component: () => import('../views/BookMall/book-interface/index.vue'), prop: true },
  { path: '/bulkbuy', name: 'BulkBuy', component: () => import('../views/BookMall/book-interface/components/bulk-buy.vue') }

]

const router = new VueRouter({
  routes
})

export default router
