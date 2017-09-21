<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>{{$route.params.username}}</h2>
    <h3>{{$route.params.id}}</h3>
  </div>
</template>

<script>
  export default {
    name: "hi",
    data: () => {
        return {
            msg:"Hi，I am 1pony one"
        }
    }
  }

</script>

<style scoped>
  h1 {
    color: red;
  }

</style>
