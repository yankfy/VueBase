
# Vue-router入门
## 安装vue-router【vue-cli脚手架中已经安装】
```js
npm install vue-router --save-dev
```
## router-link制作导航
```js
<router-link to="跳转链接">跳转文字</router-link>
```
## 跳转子页面
```js
// TODO: 子路由一个坑！！
{
    path: '/hi',
    // name: 'Hi', // name 可写可不写，但是还是有用的..加上这句话会有一个警告
    component: Hi,
    children:[
        {path:'/',component: Hi},
        {path:'hi1',component: HiA}, // TODO: 这里一个坑！！！不能加/
        {path:'hi2',component: Hi2}
    ]
},
```
## 参数传递
### 用router/index.js 中name传递
App.vue 文件中用 {{ $route.name }} 获取
### 用name和params传递 【实际开发中用的很多】
```html
 <!-- 传递参数 -->
 <router-link :to="{name:'HiA',params:{username:'pony'}}">Hi子页面1</router-link>
 <!-- 接收参数 -->
 {{$route.name}} <!--获取name-->
 {{$route.params.username}} <!--获取username-->
 ```

## 单页面多路由区域操作
```html
<!-- 单页面多路由操作 -->
    <router-view></router-view>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
```
```js
{
    path: '/',
    name: 'Hello',
    components: { // 有多个路由时，是components 。一个default 是那么没有起名字的那个
        default:Hello, //组件名字
        left:B1,
        right:B2
    }
},
```
## vue-router 利用url来传参数 
```js
// 在routes 中的path 参数用绑定的方式进行传参
{
    path:'/params/:newsId(\\d)/newsTitle',
    component:Params // 页面组件
}
```
```html
<!-- 用插值的形式接受utl参数 -->
<router-link to="/params/21/今日新闻">Params带参数</router-link>
<p>newsId {{$route.params.newsId}}</p>
<p>newsTitle {{$route.params.newsTitle}}</p>
```
`当页面url有参数的时候，就会出现页面信息，没有的时候显示空白`
## Vue-router重定向
```js
{
    path:'/gohome', // 写的时候斜杠不能少
    // 重定向后面还是路由链接
    redirect:'/'
},
{
    // 在url参数中传递参数可以直接加正则
    path:'/goparams/:newsId(\\d+)/:newsTitle', //用冒号进行绑定
    redirect:'/params/:newsId(\\d+)/:newsTitle'
},
```
## Vue-alias别名的使用
`实际项目开发中根目录中起别名不起作用`
```js
{
    path:'/B1',
    component:B1,
    alias:"/Bone" //别名
}
```

## 路由的过渡动画
`<transition>标签`
```html
<transition name="fade">
  <router-view ></router-view>
</transition>
```
`css过渡类名：`
- fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
- fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
- fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
- fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。

```css
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```
`mode过渡模式`
- in-out 先过渡进入再过渡离开
- out-in 先过渡离开再过渡进入
## mode的设置和404页面的处理
- histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://xxx/some/
- hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。
`404页面的处理`
```js
 {
    path:"*", // 页面找不到时候的路径
    component:Error
}
```
## 路由中的钩子函数
### 路由配置文件中的钩子函数
```js
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
```

## 编程式导航
```js
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
```