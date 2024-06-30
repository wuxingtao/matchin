/**
 * @Desc: globalStore
 * @Author: wu xingtgao
 * @Date: 2020/7/9
 */

const globalStore = {
  namespaced: true, // 是否使用module命名空间
  state: {
    count: 0,
    queList: []
  },
  getters: {
    doubleCount: state => state.count * 2
  },
  mutations: {
    ADD_COUNT: (state, payload) => {
      state.count += payload || 1
    },
    CLEAR_COUNT: state => {
      state.count = 0
    }
  },
  actions: {
    addCount({ commit }, value) {
      commit('ADD_COUNT', value)
    },
    /**
     *
     * @param state 当前module state
     * @param dispatch 触发action
     * @param rootState store根数据
     * @param payload action 传参
     * @constructor
     */
    syncAddCount({ state, dispatch, rootState }, payload) {
      if (rootState.page === 'home' && state.count === 1) {
        dispatch('addCount', payload)
      } else {
        console.log('other')
      }
    },
    clear_count({ commit }, value) {
      commit('CLEAR_COUNT')
    }
  }
}

export default globalStore
