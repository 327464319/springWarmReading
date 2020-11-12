import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // user: JSON.parse(window.localStorage.getItem('user'))
    // this.user = JSON.parse(this.user)
    include: ['Home']

  },
  mutations: {
    setUser (state) {
      state.user = ''

      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      window.localStorage.removeItem('user')
    },
    setInclude (state, target) {
      if (state.include.indexOf(target) === -1) {
        state.include.push(target)
      } else {
        return false
      }
    },
    removeInclude (state, target) {
      const index = state.include.indexOf(target)

      if (index === -1) {
        return false
      } else {
        state.include.splice(index, 1)
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
