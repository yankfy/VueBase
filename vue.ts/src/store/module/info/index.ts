// import request from '@/service';
import { State } from "./interface";
import { Commit, Dispatch } from "vuex";
import { ADD, REDUCE, OPERATE, MAX_COUNT, MIN_COUNT } from "@/common/js/const";
/// <reference path="@/types/session.d.ts"/>
import { setSession, getSession } from "@/common/js/session";
let infoState = getSession("infoState");

const state: State = infoState || {
  operateAdd: "增加",
  operateReduce: "减少"
};

const getters = {
  operateAdd: (state: State) => state.operateAdd,
  operateReduce: (state: State) => state.operateReduce
};

const mutations = {
  [OPERATE](state: State, payload: any) {
    console.log(`[获取根部rootState]${payload}`);
    // console.log(payload)
    if (payload.count.count >= MAX_COUNT) {
      state.operateAdd = "最大值";
    } else if (payload.count.count <= MIN_COUNT) {
      state.operateReduce = "最小值";
    } else {
      state.operateAdd = "增加";
      state.operateReduce = "减少";
    }
    setSession("infoState", state);
  }
};

const actions = {
  // 异步处理，可以触发其他事件
  async operateRes(context: { commit: Commit; rootState: any }) {
    context.commit(OPERATE, context.rootState);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
