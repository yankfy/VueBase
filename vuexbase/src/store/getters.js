import { ADD, REDUCE, MAX_COUNT } from '@/common/js/const'
export default {
  // 计算属性,规范统一
  countName(state) {
    return state.count + '个'
  }
}