<template lang="pug">
  .home
    //- 子组件向父组件传值
    button {{btnInfo}}
    //- 父组件向子组件传值
    Panel(msg="传递props信息",mymsg="父组件向子组件传递信息" @changeInfo='changeInfo')
    hr
    h3 vuex vue-cli3 使用State
    div {{count}}
    button(@click="addBtn") {{operateAdd}}
    button(@click="reduceBtn") {{operateReduce}}
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Panel from "@/components/Panel.vue"; // @ is an alias to /src
import { namespace } from "vuex-class";
const countModule = namespace("count");
const infoModule = namespace("info");

@Component({
  components: {
    Panel
  }
})
export default class Home extends Vue {
  // vuex 状态和方法引入
  @countModule.Getter("count") count: any;
  @countModule.Action("addAction") addAction: any;
  @countModule.Action("reduceAction") reduceAction: any;
  @countModule.Action("resultAction") resultAction: any;
  @infoModule.Getter("operateAdd") operateAdd: any;
  @infoModule.Getter("operateReduce") operateReduce: any;
  @infoModule.Action("operateRes") operateRes: any;

  public btnInfo: string = "父按钮信息";
  public changeInfo(active: boolean) {
    this.btnInfo = `子组件更改${active}`;
  }
  public async addBtn() {
    await this.addAction(5);
    this.operateRes();
  }
  public async reduceBtn() {
    await this.reduceAction(3);
    this.operateRes();
  }
}
</script>
