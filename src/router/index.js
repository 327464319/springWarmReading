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
      { path: '/my', component: () => import('@/views/My') },
      { path: '/bookmall', component: () => import('@/views/BookMall') },
      { path: '/bookrack', component: () => import('@/views/BookRack') }
    ]
  },
  { path: '/login', component: () => import('../views/Login') },
  { path: '/search', component: () => import('../views/BookRack/RankSearch') },
  { path: '/login', component: () => import('@/views/Login') },
  { name: 'DetailsIndex', path: '/details/:bookId', component: () => import('../views/BookRack/Details.vue'), props: true }

]

const router = new VueRouter({
  routes
})

export default router
