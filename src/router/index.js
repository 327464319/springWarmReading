import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/bookrack',

    children: [
      { path: '/my', component: () => import('../views/My') },
      { path: '/bookmall', component: () => import('../views/BookMall') },
      { path: '/bookrack', component: () => import('../views/BookRack') },
      { path: '/account', component: () => import('../views/My/components/account.vue') }
    ]
  },
  { path: '/login', component: () => import('../views/Login') }

]

const router = new VueRouter({
  routes
})

export default router
