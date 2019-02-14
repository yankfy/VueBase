<template>
  <div>
    {{count}}
    {{countName}}
    <button @click="addBtn">{{operateAdd}}</button>
    <button @click="reduceBtn">{{operateReduce}}</button>
  </div>
</template>

<script>
// 这种引入方式 不常用
// import { store } from '@/store'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    // ...mapState(['count', 'operateAdd', 'operateReduce']),
    ...mapState({
      count: state => state.count,
      operateAdd: state => state.operate.operateAdd,
      operateReduce: state => state.operate.operateReduce
    }),
    // ...mapGetters({
    //   countName: state => state.countName
    // })
    // 类似计算属性，自动进行过滤添加
    ...mapGetters(['countName'])
  },
  methods: {
    ...mapActions(['addAction', 'reduceAction', 'operateRes']),
    async addBtn() {
      await this.addAction(5)
      this.operateRes()
    },
    async reduceBtn() {
      await this.reduceAction(3)
      this.operateRes()
    }
  }
}
</script>

<style>
</style>
