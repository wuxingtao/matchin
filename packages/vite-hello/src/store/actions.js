/**
 * @Desc: action
 * @Author: wu xingtgao
 * @Date: 2020/7/9
 */
export default {
  clearCount ({ commit, state }, payload) {
    console.log(state.count,payload)
    commit('CLEAR_COUNT')
  }
}
