<template lang="pug">
  .home
    //- 子组件向父组件传值
    span 父组件展示：{{btnInfo}}
    //- 父组件向子组件传值
    el-scrollbar(class='scrollbar')
      Panel(mymsg="父组件通过props向子组件传递信息" @changeInfo='changeInfo')
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Panel from "@/pages/_components/Panel.vue"; // @ is an alias to /src

@Component({
  components: {
    Panel
  }
})
export default class Home extends Vue {
  public btnInfo: string = "父按钮信息";
  public changeInfo(active: boolean) {
    this.btnInfo = `子组件更改${active}`;
  }
}
</script>

<style lang="stylus" scoped>
.scrollbar
  width 300px
  height 100px
  margin 0 auto
</style>
