<template lang="pug">
  div.viser
    v-chart(:forceFit="true",:height="height",:width="width",:data="data",:scale="scale",renderer='svg')
      v-tooltip(:showTitle="false",dataKey="item*percent")
      v-axis
      v-legend(dataKey="item")
      v-pie(position="percent",color="item",:v-style="pieStyle",:label="labelConfig")
      v-coord(type="theta",:radius="0.75",:innerRadius="0.6")
</template>

<script lang="ts">
const DataSet = require("@antv/data-set");

const sourceData = [
  { item: "事例一", count: 40 },
  { item: "事例二", count: 21 },
  { item: "事例三", count: 17 },
  { item: "事例四", count: 13 },
  { item: "事例五", count: 9 }
];

const scale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".0%"
  }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const data = dv.rows;

import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class Viser extends Vue {
  private data: Object = data;
  private scale: Array<Object> = scale;
  private height: number = 400;
  private width: number = 400;
  private pieStyle: Object = {
    stroke: "#fff",
    lineWidth: 1
  };
  private labelConfig: Array<any> = [
    "percent",
    {
      formatter: (val: any, item: any) => {
        return item.point.item + ": " + val;
      }
    }
  ];
}
</script>

<style lang="stylus" scoped>
.viser
  s-wh(500px, 400px)
  margin 0 auto
</style>
