<template lang="pug">
	div
		.count vue-cli3 使用 Vuex State
			.count-number {{count}}
		Button(@click="addBtn") {{operateAdd}}
		Button(@click="reduceBtn") {{operateReduce}}
		router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const countModule = namespace("count");
const infoModule = namespace("info");

@Component({})
export default class Home extends Vue {
  // vuex 状态和方法引入
  @countModule.Getter("count") count: any;
  @countModule.Action("addAction") addAction: any;
  @countModule.Action("reduceAction") reduceAction: any;
  @countModule.Action("resultAction") resultAction: any;
  @infoModule.Getter("operateAdd") operateAdd: any;
  @infoModule.Getter("operateReduce") operateReduce: any;
  @infoModule.Action("operateRes") operateRes: any;

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

<style lang="stylus" scoped>
.count
  margin 10px 0
  s-font(18px, $kpmgBlack)
  &-number
    s-font(16px, $kpmgBlueDark, 700)
</style>
