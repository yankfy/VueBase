# state 访问状态对象
```js
  import store from "@/vuex/store";

  // 第二三种 领用mapState
  import {mapState} from "vuex";
  export default {
    data: () => {
      return {
        msg: "Hello Vuex"
      }
    },
    // TODO: 使用 store 引入后要在这里加 一个 state!!! 坑点   
    store,
    methods: {
      add($store) {
        $store.commit('add');
      },
      cut() {
        $store.commit('cut');
      }
    },
    // TODO: 第一种方法
    // computed: {
    //   count() {
    //     return this.$store.state.count;
    //   }
    // }
    // TODO: 第二种方法
    // computed: mapState({
    //   count: state => state.count
    // })

    // TODO: 第三种方法 FIXME: 最为常用的
    computed:mapState(['count'])
  }
```
# mutations 同步修改状态对象
```js
const mutations = {
  // 加参数传值
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count--;
  }
}
// 加参数传值
$store.commit('add',10);
```
`更改传递方式`
```js
// TODO: 第一种方法;
add($stroe);
methods: {
    add($store) {
        $store.commit('add',10);
    }
}
// TODO: 第二种方法 引入mapMutations
import {mapState,mapMutations} from "vuex";
methods:mapMutations(['add','reduce']);
// 使用时若有参数
add(params)
```
# 放置到服务器
1.config 文件下的index.js
```js
// 更改绝对路径为相对路径
 assetsPublicPath: './',
```
2.运行命令

> npm run build

# getters 运算状态修改
```js
// 相当于vue中的computed
const getters = {
  count(state){
    return state.count += 20;
  }
}
```

```js
computed:{
    ...mapState(['count']), // ES6 中的拓展运算符 
    // TODO: 第一种方法
    // count(){
    //   return this.$store.getters.count;
    // }
    // TODO: 第二种方法
    ...mapGetters(['count'])
},
```

# actions 异步修改状态
```js
// 异步修改状态
const actions = {
  // actions 可以调用mutations 中的方法
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('reduce')},5000);
    console.log("我比reduce先执行");
  },
  reduceAciton({commit}){
    commit('reduce');
  }
}
```

```js
methods: {
  ...mapMutations(['add', 'reduce']),
  ...mapActions(['addAction', 'reduceAciton']),
}
```

