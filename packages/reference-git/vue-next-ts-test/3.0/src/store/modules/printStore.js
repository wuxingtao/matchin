/**
 * @Desc: printStore 打印发货列表store
 * @Author: wu xingtgao
 * @Date: 2020/11/11
 */
import storage from '@/common/utils/storage'

const printStore = {
  namespaced: true,
  state: {
    selectOrderList: [], // 打印发货当前选中,
    differentOrderList: [], // 当前选中中非买家指定物流列表
    print_head_list: [] // 打印发货表格head
  },
  getters: {
    /* 店铺code */
    $shop_channel (state) {
      return state.selectOrderList.channel
    }
  },
  mutations: {
    /* 更新当前打印发货选中 */
    UPDATE_SELECT_ORDER_LIST (state, payload) {
      state.selectOrderList = payload
    },
    /* 更新非买家指定物流列表 */
    UPDATE_DIFFERENT_ORDER_LIST (state, payload) {
      state.differentOrderList = payload
    },
    /* 更新打印发货表格列表 */
    UPDATE_HEAD_LIST (state, payload = []) {
      state.print_head_list = [...payload]
    }
  },
  actions: {
    update_select_order_list ({ commit }, payload = []) {
      commit('UPDATE_SELECT_ORDER_LIST', payload)
    },
    update_different_order_list ({ commit }, payload = {}) {
      commit('UPDATE_DIFFERENT_ORDER_LIST', payload)
    },
    /* 更新打印发货head 全部排序数组 columnVersion 版本号用于更新排序 */
    update_head_order_list ({ commit, rootState }, payload = { columnVersion: '', head_list_arr: [] }) {
      const { id } = rootState.userStore.userInfo
      storage.set(`print_order_head_list_${id}`, payload.head_list_arr)
      storage.set(`print_head_version_${id}`, payload.columnVersion)
    },
    /* 更新过滤后打印发货表格头数组 */
    update_table_head_list ({ commit, rootState }, payload = []) {
      const { id } = rootState.userStore.userInfo
      storage.set(`print_head_list_${id}`, payload)
      commit('UPDATE_HEAD_LIST', payload)
    },

    /* 更新过滤后打印发货表格头选中数组 */
    update_head_check_list ({ commit, rootState }, payload = []) {
      const { id } = rootState.userStore.userInfo
      storage.set(`print_head_check_${id}`, payload)
    },
    /* 删除打印发货表格头数组 */
    remove_table_head_list ({ commit, rootState }, payload = []) {
      const { id } = rootState.userStore.userInfo
      storage.remove(`print_head_list_${id}`)
      storage.remove(`print_head_check_${id}`)
    },
    /* 获取打印发货表头 */
    get_head_list ({ commit, rootState }, payload = []) {
      const { id } = rootState.userStore.userInfo
      return storage.get(`print_head_list_${id}`) || []
    }
  }
}
export default printStore
