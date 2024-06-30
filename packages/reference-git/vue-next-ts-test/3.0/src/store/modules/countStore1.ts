/**
 * @Desc: countStore
 * @Author: wu xingtgao
 * @Date: 2020/7/9
 */
import { MutationTree, ActionTree, Module } from "vuex";

export interface countState {
  count: number,
  queList: []
}

const countStore: Module<countState, any> = {
  namespaced: true, // 是否使用module命名空间
  state: {
    count: 0,
    queList: [],
  },
  getters: {
    doubleCount: state => state.count * 2
  },
  mutations: {
    ADD_COUNT: (state: any, payload: number) => {
      state.count += payload || 1;
    },
    CLEAR_COUNT: (state: any) => {
      state.count = 0;

    }
  },
  actions: {
    add_count({commit}, value: number) {
      commit('ADD_COUNT', value);
    },
    /**
     *
     * @param state 当前module state
     * @param dispatch 触发action
     * @param rootState store根数据
     * @param payload action 传参
     * @constructor
     */
    SyncAddCount({state, dispatch, rootState}, payload: number) {
      if (rootState.page === 'home' && state.count === 1) {
        dispatch('add_count', payload);
      } else {
        console.log('other');
      }

    }
  }

};

export default countStore;
