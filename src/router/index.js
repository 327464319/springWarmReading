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
  { path: '/booktypes', component: () => import('../views/BookTypes') },
  { path: '/Nexttypes', component: () => import('../views/BookTypes/component/NextTypes') }

]

const router = new VueRouter({
  routes
})

export default router
