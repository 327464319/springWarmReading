import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户的登录状态信息

    user: JSON.parse(window.localStorage.getItem('user'))
    // this.user = JSON.parse(this.user)

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
