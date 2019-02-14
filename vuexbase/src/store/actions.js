import { ADD, REDUCE, MAX_COUNT } from '@/common/js/const'
export default {
  // 异步处理，可以触发其他事件
  async addAction({ commit, dispatch }, params) {
    await commit(ADD, params)
    dispatch('resultAction')
  },
  async reduceAction({ commit, dispatch }, params) {
    await commit(REDUCE, params)
    dispatch('resultAction')
  },
  async resultAction({ state }) {
    console.log("[dispatch action]计算后的count = " + state.count)
  }
}