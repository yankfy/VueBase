<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <!-- 用插值的形式接受utl参数 -->
    <p>newsId {{$route.params.newsId}}</p>
    <p>newsTitle {{$route.params.newsTitle}}</p>
    <p v-if="$route.params.newsId">有id参数</p>
    <p v-if="$route.params.newsTitle">有title参数</p>
  </div>
</template>

<script>
  export default {
    name: "hi",
    data: () => {
        return {
            msg:"Params Page"
        }
    },
    // 进入时的函数
    beforeRouteEnter:(to,from,next) =>{
      console.log("准备进入参数模板");
      // 一定要写next();
      next();
    },
    beforeRouteLeave:(to,from,next) =>{
      console.log("准备离开参数模板");
      // 一定要写next();
      next();
    }
  }

</script>

<style scoped>
  h1 {
    color: blue;
  }

</style>
