<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "hi",
    data: () => {
        return {
            msg:"Hi，I am pony"
        }
    }
  }

</script>

<style scoped>
  h1 {
    color: red;
  }

</style>
