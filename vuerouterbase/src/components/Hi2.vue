<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: "hi",
    data: () => {
        return {
            msg:"Hi，I am 2pony two"
        }
    }
  }

</script>

<style scoped>
  h1 {
    color: blue;
  }

</style>
