// import request from '@/service';
import { State } from "./interface";
import { Commit, Dispatch } from "vuex";
import { ADD, REDUCE, MAX_COUNT, MIN_COUNT } from "@/common/js/const";
/// <reference path="@/types/session.d.ts"/>
import { setSession, getSession } from "@/common/js/session";
let countState = getSession("countState");

const state: State = countState || {
  count: 0 // count值大小
};

const getters = {
  countGetter: (state: State) => state.count + "个",
  count: (state: State) => state.count
};

const mutations = {
  [ADD](state: State, payload: any) {
    state.count += payload;
    // console.log(MAX_COUNT, state.count === MAX_COUNT)
    if (state.count >= MAX_COUNT) {
      state.count = MAX_COUNT;
    }
    setSession("countState", state);
  },
  [REDUCE](state: State, payload: any) {
    state.count -= payload;
    if (state.count <= MIN_COUNT) {
      state.count = MIN_COUNT;
    }
    setSession("countState", state);
  }
};

const actions = {
  // 异步处理，可以触发其他事件
  async addAction(
    context: { commit: Commit; dispatch: Dispatch },
    params: any
  ) {
    await context.commit(ADD, params);
    context.dispatch("resultAction");
  },
  async reduceAction(
    context: { commit: Commit; dispatch: Dispatch },
    params: any
  ) {
    await context.commit(REDUCE, params);
    context.dispatch("resultAction");
  },
  async resultAction(context: { state: State }) {
    console.log("[dispatch action]计算后的count = " + context.state.count);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
