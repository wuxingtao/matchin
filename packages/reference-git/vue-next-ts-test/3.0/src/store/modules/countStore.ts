/**
 * @Desc: countStore
 * @Author: wu xingtgao
 * @Date: 2020/7/9
 */
import { MutationTree, ActionTree, Module } from 'vuex';

// 每个state 都有对应的interface,用于明确该state的类型
export interface CountState {
  count: number;
  queList: any[]; // 任意类型数组
}

const state: CountState = {
  count: 0,
  queList: []
};

const mutations: MutationTree<CountState> = {
  ADD_COUNT: (state, payload) => {
    state.count += payload || 1;
  },
  CLEAR_COUNT: (state) => {
    state.count = 0;
  }
};

const actions: ActionTree<CountState, any> = {
  add_count ({ commit }, value: number) {
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
  SyncAddCount ({ state, dispatch, rootState }, payload: number) {
    if (rootState.page === 'home' && state.count === 1) {
      dispatch('add_count', payload);
    } else {
      console.log('other');
    }
  }
};

// 导出vuex Moduel类型
const countStore: Module<CountState, any> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default countStore;
