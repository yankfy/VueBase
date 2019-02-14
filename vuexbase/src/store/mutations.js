import { ADD, REDUCE, MAX_COUNT, MIN_COUNT } from '@/common/js/const'
export default {
  // 同步修改状态
  [ADD](state, payload) {
    state.count += payload
    // console.log(MAX_COUNT, state.count === MAX_COUNT)
    if (state.count >= MAX_COUNT) {
      state.count = MAX_COUNT
    }
  },
  [REDUCE](state, payload) {
    state.count -= payload
    if (state.count <= MIN_COUNT) {
      state.count = MIN_COUNT
    }
  },
}