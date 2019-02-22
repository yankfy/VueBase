<template lang="pug">
  #app
    #nav
      span(v-for="(item,index) in routerData" :key="index")
        router-link(class="ivu-btn ivu-btn-default",:to="item.url") {{item.name}}
        span(v-if="index < routerData.length - 1") &nbsp;|&nbsp;
    router-view
  //- <div id="app">
  //-   <div id="nav">
  //-     <router-link to="/">Viser</router-link> |
  //-     <router-link to="/about">About</router-link> |
  //-     <router-link to="/count">Count</router-link> |
  //-     <!-- 子路由页面对应的父路由必须有router-view标签 -->
  //-     <router-link to="/count/info">Info</router-link>
  //-     <!-- <router-link :to="{ path: '/count/info' }">Info</router-link> -->
  //-     <!-- <router-link :to="{ name: 'info', params: { userId: 123 }}">Info</router-link> -->
  //-     <!-- <router-link :to="{ name: 'info'}">Info</router-link> -->
  //-   </div>
  //-   <router-view />
  //- </div>
</template>

<script lang="ts">
// demo数据，实际需删除
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class APP extends Vue {
  public routerData: Array<Object> = [
    { url: "/", name: "Viser" },
    { url: "/about", name: "父子通信" },
    { url: "/count", name: "Vuex" },
    { url: "/count/info", name: "AJAX" }
  ];
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
  span
    s-wh(100%)
  .router
    s-wh(100%)
</style>
