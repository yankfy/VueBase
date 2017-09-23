<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="goHome">返回到首页</button>
    </div>
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
    <!-- <router-view></router-view>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view> -->
    <br>
    <router-link to="/">Home</router-link><br>
    <!-- <router-link to="/params">Params</router-link><br>  -->
    <router-link to="/params/21/今日新闻">Params带参数</router-link><br>
    <router-link to="/gohome">重定向回到首页</router-link><br>
    <router-link to="/goparams/22/明日新闻">重定向回到参数页面</router-link><br>
    <router-link to="/B1">跳到B1页面</router-link><br>
    <router-link to="/Bone">alias别名跳到B1页面</router-link><br>
    <router-link to="/wsxxd">我是瞎写的</router-link>
    <hr>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      back() {
        // 编程式导航
        this.$router.go(-1);
      },
      forward() {
        // 编程式导航
        this.$router.go(1);
      },
      goHome(){
        this.$router.push('/');
      }
      // 编程式跳转，跳转到任意页
     // this.$router.push('/xxx');
    }
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

  .left {
    float: left;
    width: 50%;
    background: red;
    color: #fff;
  }

  .right {
    float: right;
    width: 50%;
    background: black;
    color: #fff;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }

</style>
