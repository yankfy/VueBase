import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import operate from '@/pages/operate/store'
import { ADD, REDUCE, MAX_COUNT } from '@/common/js/const'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 相当于vue的computed
  getters,
  // 异步修改状态
  actions,
  // 同步修改状态
  mutations,
  // 模块化
  modules: {
    operate
  }
})