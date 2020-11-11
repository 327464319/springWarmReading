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
      { name: 'MyAccount', path: '/account', component: () => import('../views/My/components/account.vue'), props: true }
    ]
  },
  { path: '/login', component: () => import('../views/Login') },
  { path: '/search', component: () => import('../views/BookRack/RankSearch') },
  { name: 'DetailsIndex', path: '/details/:bookId', component: () => import('../views/BookRack/Details.vue'), props: true },
  { path: '/information', component: () => import('../views/BookRack/Information.vue') },
  { path: '/special', component: () => import('../views/BookRack/Special.vue') }

]

const router = new VueRouter({
  routes
})

export default router
