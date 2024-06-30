/**
 * @Desc: index
 * @Author: wu xingtao
 * @Date: 2022/1/27
 */
import store from './store'

class Shared {
  getToken() {
    const state = store.getState()
    return state.token || ''
  }

  setToken(token) {
    store.dispatch({
      type: 'SET_TOKEN',
      payload: token
    })
  }
}

const shared = new Shared()

export default shared
