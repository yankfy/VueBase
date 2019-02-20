// import request from '@/service';
import { State } from "./interface";
import { Commit, Dispatch } from "vuex";
import { ADD, REDUCE, OPERATE, MAX_COUNT, MIN_COUNT } from "@/common/js/const";
/// <reference path="@/types/session.d.ts"/>
import { setSession, getSession } from "@/common/js/session";
import axios from "@/utils/ajax";
let infoState = getSession("infoState");

const state: State = infoState || {
  operateAdd: "增加",
  operateReduce: "减少",
  mockData: null
};

const getters = {
  operateAdd: (state: State) => state.operateAdd,
  operateReduce: (state: State) => state.operateReduce,
  mockData: (state: State) => state.mockData
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
  },
  SETMOCK(state: State, payload: any) {
    state.mockData = payload;
  }
};

const actions = {
  // 异步处理，可以触发其他事件
  async operateRes(context: { commit: Commit; rootState: any }) {
    context.commit(OPERATE, context.rootState);
  },
  // 异步处理axios 请求
  async getMockData(context: { commit: Commit; rootState: any }, params: any) {
    console.log(`get vuex`)
    const { data } = await axios.get("/api/mockdata", { params });
    context.commit("SETMOCK", data.result);
  },
  // 异步处理axios 请求
  async postMockData(context: { commit: Commit; rootState: any }, params: any) {
    console.log(`post vuex`)
    const { data } = await axios.post("/api/mockdata", params );
    context.commit("SETMOCK", data.result);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
