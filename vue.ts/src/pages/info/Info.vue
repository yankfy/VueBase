<template lang="pug">
	div
		h3.info 使用vuex获取接口数据
			div(v-for="(items,index) in mockDataView",:key="index")
				Button(size="small",v-for="(item,ins) in items",:key="ins")
					span {{item.title}}
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
// 组件引入智能在上条语句的后面
// ! axios mock 请求
import api from "@/config/api/index";

// ! vuex 引入api
import { namespace } from "vuex-class";
const infoModule = namespace("info");

@Component({})
export default class Info extends Vue {
  // vuex axios
  @infoModule.Action("getMockData") getMockData: any;
  @infoModule.Action("postMockData") postMockData: any;
	@infoModule.Getter("mockData") mockData: any;

  // data
	mockDataView: Object = {};

  // created 生命周期钩子
  public async created() {
    // ! axios getmock请求
    // api.getMockData({ id: 1 }).then((res: any) => {
    //   const { code, message, result } = res;
    //   console.log(res);
    // });
    // ! axios postmock请求
    // api.postMockData({ id: 1 }).then((res: any) => {
    //   const { code, message, result } = res;
    //   console.log(res);
    // });
    // ! 通过 vuex get请求数据
    // await this.getMockData({ id: 1 });
    // this.mockDataView = this.mockData;
    // ! 通过 vuex post请求数据
    await this.postMockData({ id: 1 });
    this.mockDataView = this.mockData;
	}

  // mounted 生命周期钩子
  public mounted() {}
}
</script>

<style lang="stylus" scoped>
.info
  margin 10px 0
  s-font(18px, $purple)
</style>
