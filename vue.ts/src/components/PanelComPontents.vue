<template lang="pug">
	.panel
		.panel-box {{panel}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PanelComPontents extends Vue {
  @Prop() private panel!: string;
}
</script>

<style lang="stylus" scoped>
.panel
  &-box
    s-font(25px, red)
</style>
