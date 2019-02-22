<template lang="pug">
  .hello
    div {{mymsg}}
    div 父子组件通信按钮 点击次数{{activeWa}}
    div filters 属性使用 点击次数是否超过五次{{activeWa | activeWaFilter}}
    div {{tests}}
    button(@click='changeInfo(active)',:class="active?'active changeBtn':'inactive changeBtn'") {{msgs}}
    PanelComPontents(panel="panel子组件与另一子组件通信")
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
// 组件引入智能在上条语句的后面
import PanelComPontents from "./PanelComPontents.vue";

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
  // data
  msgs: string = "切换";
  active: boolean = true;
  activeWa: number = 1;
  // prop 父组件向子组件传值方式
  @Prop() private mymsg!: string;
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
  public async created() {}
  // mounted 生命周期钩子
  public mounted() {}
  // 计算属性【函数里禁止使用alert】
  public get tests() {
    return `计算属性展示${this.active}`;
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
