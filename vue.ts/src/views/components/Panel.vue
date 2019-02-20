<template lang="pug">
  .hello
    .pug {{msg}}
    div {{mymsg}}
    div 更改次数{{activeWa | activeWaFilter}}
    div {{tests}}
    button(@click='changeInfo(active)',:class="active?'active changeBtn':'inactive changeBtn'") {{msgs}}
    PanelComPontents(panel="panel父组件传入的值")
    hr
    h3 使用vuex获取接口数据
    div(v-for="(items,index) in mockDataView" :key="index")
      Button(v-for="(item,ins) in items" :key="ins")
        span {{item.title}}
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
// 组件引入智能在上条语句的后面
import PanelComPontents from "./PanelComPontents.vue";

// ! axios mock 请求
import api from "@/config/api/index";

// ! vuex 引入api
import { namespace } from "vuex-class";
const infoModule = namespace("info");

// 组件引用，mixins，filters 等放在 @Component 里面
@Component({
  components: { PanelComPontents },
  // 过滤器函数
  filters: {
    activeWaFilter(value: number) {
      // console.log(value);
      return value >= 5;
    }
  }
})
export default class Panel extends Vue {
  // vuex axios
  @infoModule.Action("getMockData") getMockData: any;
  @infoModule.Action("postMockData") postMockData: any;
  @infoModule.Getter("mockData") mockData: any;
  // data
  msgs: string = "按钮";
  active: boolean = true;
  activeWa: number = 1;
  mockDataView: Object={};
  // prop 父组件向子组件传值方式
  @Prop() private mymsg!: string;
  @Prop() private msg!: string;
  // emit 子组件向父组件传值方式
  @Emit("changeInfo")
  changeInfo(active: boolean) {
    this.active = !this.active;
  }
  // 不允许监听prop里的函数，不然会报错的。watch下面的函数式watch监听函数
  @Watch("active", { deep: true })
  activeWatch() {
    this.activeWa++;
  }
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
  // 计算属性【函数里禁止使用alert】
  public get tests() {
    return `计算属性${this.active}`;
  }
}
</script>

<style scoped lang="stylus">
.hello
  color $redDark

  .changeBtn
    border none
    outline none
    s-wh(60px, 25px)
    s-font(14px, $kpmgWhite)
    cursor pointer

    &.active
      background-color $kpmgBlueLight

    &.inactive
      background-color $purple
</style>
