import { OPERATE, MAX_COUNT, MIN_COUNT } from '@/common/js/const'
export default {
  state: {
    operateAdd: '增加',
    operateReduce: '减少'
  },
  actions: {
    operateRes({ commit, rootState }) {
      commit(OPERATE, rootState)
    }
  },
  // 同步修改状态
  mutations: {
    [OPERATE](state, payload) {
      console.log(`[获取根部rootState]${payload}`)
      if (payload.count >= MAX_COUNT) {
        payload.operate.operateAdd = '最大值'
      } else if (payload.count <= MIN_COUNT) {
        payload.operate.operateReduce = '最小值'
      }else{
				payload.operate.operateAdd = '增加'
				payload.operate.operateReduce = '减少'
			}
    }
  }
}