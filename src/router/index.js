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
      { path: '/bookmall', component: () => import('../views/BookMall'), meta: { index: 4 } },
      {
        path: '/bookrack',
        component: () => import('../views/BookRack'),
        meta: { index: 4 }
      },
      { path: '/account', component: () => import('../views/My/components/account.vue') },
      { path: '/bookmall', component: () => import('../views/BookMall') },
      { path: '/bookrack', component: () => import('../views/BookRack') },
      { name: 'MyAccount', path: '/account', component: () => import('../views/My/components/account.vue'), props: true }
    ]
  },
  { path: '/login', component: () => import('../views/Login') },
  { path: '/search', component: () => import('../views/BookRack/RankSearch') },
  {
    name: 'DetailsIndex',
    path: '/details/:bookId',
    component: () => import('../views/BookRack/Details.vue'),
    meta: { index: 1 },
    props: true
  },
  { path: '/information', component: () => import('../views/BookRack/Information.vue') },
  { path: '/special', component: () => import('../views/BookRack/Special.vue') },
  { path: '/login', name: 'login', component: () => import('../views/Login') },
  { path: '/gender', component: () => import('../views/Gender') },
  { path: '/register', component: () => import('../views/Register') },
  { path: '/booktypes', component: () => import('../views/BookTypes'), meta: { index: 3 } },
  { path: '/Nexttypes', component: () => import('../views/BookTypes/NextTypes'), meta: { index: 2 } },
  { path: '/booklist', component: () => import('@/views/BookMall/BookList.vue') }

]

const router = new VueRouter({
  routes
})

export default router
