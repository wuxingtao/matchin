/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2020/7/9
 */
import {createStore} from 'vuex'
import globalStore from '@store/modules/globalStore'
import getters from '@store/getters'
import actions from '@store/actions'
import mutations from '@store/mutations'

const state = ()=>{
  return {
    page:'home',
    isLoading:false,
    direction:'forward'
  }
}

export const store = createStore({
  state,
  actions,
  mutations,
  getters,
  modules:{
    globalStore
  }
})

