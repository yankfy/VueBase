import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
  count: 1
}

const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count--;
  }
}
// 相当于vue中的computed
const getters = {
  count(state){
    return state.count += 20;
  }
}

// 异步修改状态
const actions = {
  // actions 可以调用mutations 中的方法
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('reduce')},5000);
    console.log("我比reduce先执行");
  },
  reduceAciton({commit}){
    commit('reduce');
  }
}

// 声明模块组
const moduleA ={
  state,
  mutations,
  getters,
  actions
}

// 将数据暴露出去

export default new Vuex.Store({
  // 使用模块组
  modules:{a:moduleA}
})
