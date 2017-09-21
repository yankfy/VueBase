<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 先做一个导航 -->
   <!-- <div>
      <router-link to="/">首页</router-link> | 
      <router-link to="/hi">跳转到hi页面</router-link> | 
      <router-link to="/h">跳转到h页面</router-link> | 
      <router-link to="/hi/hi1">Hi子页面1</router-link> | 
      <router-link to="/hi/hi2">Hi子页面2</router-link> | -->
      <!-- TODO: 用name传递参数-->
      <!--<router-link :to="{name:'HiA',params:{username:'pony',id:666}}">Hi子页面1</router-link>
      <router-link :to="{name:'HiB'}">Hi子页面2</router-link>
      <hr>
      <p>{{ $route.name }}</p>
      <hr>
    </div>-->
    <!-- 单页面多路由操作 -->
    <router-view></router-view>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left{
  float: left;
  width: 50%;
  background: red;
  color: #fff;
}
.right{
  float: right;
  width: 50%;
  background: black;
  color: #fff;
}
</style>
