<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <!-- 模块组引入方法 -->
    <h3>{{$store.state.a.count}}</h3>
    <!-- 不使用模块组 -->
    <h3>{{$store.state.count}}</h3>
    <h3>{{count}}</h3>
    <!-- 两种方法 -->
    <!-- $store.commit()中名字是store.js中的mutations中的方法名字 -->
    <p><button @click="add(10)">增加</button></p>
    <p><button @click="reduce">减少</button></p>

    <!-- TODO: 执行actions中的方法 -->
    <p><button @click="addAction">增加</button></p>
    <p><button @click="reduceAciton">减少</button></p>
    <!-- 第一种方式更改 -->
    <p>{{count}}</p>

    <hr>


  </div>
</template>

<script>
  import store from "@/vuex/store";

  // 第二三种 领用mapState
  import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    data: () => {
      return {
        msg: "Hello Vuex",
      }
    },
    // TODO: 使用 store 引入后要在这里加 一个 state!!! 坑点   
    store,
    // methods: {
    //   add($store) {
    //     $store.commit('add',10);
    //   },
    //   cut() {
    //     $store.commit('cut');
    //   }
    // },
    // TODO: 第一种方法
    // computed: {
    //   count() {
    //     return this.$store.state.count;
    //   }
    //  使用模块组
     //   count() {
    //     return this.$store.state.a.count;
    //   }
    // }
    // TODO: 第二种方法
    // computed: mapState({
    //   count: state => state.count
    // })

    // TODO: 第三种方法 FIXME: 最为常用的
    computed: {
      ...mapState(['count']), // ES6 中的拓展运算符 
      // TODO: 第一种方法
      // count(){
      //   return this.$store.getters.count;
      // }
      // TODO: 第二种方法
      ...mapGetters(['count'])

    },
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAciton']),
    }
  }

</script>

<style scoped>


</style>