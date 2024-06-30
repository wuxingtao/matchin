/**
 * @Desc: store
 * @Author: wu xingtao
 * @Date: 2022/1/27
 */
import { createStore } from 'redux'

const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
  }
}

const store = createStore(reducer)
export default store

window.debugStore = store
