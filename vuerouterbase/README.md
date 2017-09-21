
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