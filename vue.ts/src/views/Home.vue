<template lang="pug">
  .home
    //- 子组件向父组件传值
    button {{btnInfo}}
    //- 父组件向子组件传值
    Panel(msg="传递props信息",mymsg="父组件向子组件传递信息" @changeInfo='changeInfo')
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Panel from "@/components/Panel.vue"; // @ is an alias to /src

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
