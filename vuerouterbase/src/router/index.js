import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import H from '@/components/H'
import HiA from '@/components/HiA'
import Hi2 from '@/components/Hi2'

import B1 from '@/components/B1'
import B2 from '@/components/B2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      // components: { // 有多个路由时，是components 。一个default 是那么没有起名字的那个
      //   default:Hello,
      //   left:B1,
      //   right:B2
      // }
      component:Hello
    },
    {
      // 在url参数中传递参数可以直接加正则
      path:'/params/:newsId(\\d+)/:newsTitle', //用冒号进行绑定
      component:Params,
      // 路由配置文件中的钩子函数
      // beforeEnter:(to,from,next) =>{
      //   console.log(to);
      //   console.log(from);
      //   // 不写next的时候不予跳转
      //   next();
      //   // next 中可以参数true 、 false 、
      //   next({path:'/'}); // 跳到根目录
      // }
    },
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
    {
      path:'/B1',
      component:B1,
      alias:"/Bone"
    },
    {
      path:"*", // 页面找不到时候的路径
      component:Error
    }
    // {
    //   path: '/hi',
    //   // name: 'Hi', // name 可写可不写，但是还是有用的..有子路由加上这句话会有一个警告
    //   component: Hi,
    //   children:[
    //     {path:'/',name: 'Hello/Hi',component: Hi},
    //     {path:'hi1',name: 'HiA',component: HiA}, // TODO: 这里一个坑！！！不能加/
    //     {path:'hi2',name: 'HiB',component: Hi2}
    //   ]
    // },
    // {
    //   path:'/h',
    //   name:"H",
    //   component:H
    // },
    // {
    //   path: '/pony',
    //   // name: 'Hello',
    //   components: { // 有多个路由时，是components 。一个default 是那么没有起名字的那个
    //     default:Hello,
    //     left:B2,
    //     right:B1
    //   }
    // },
  ],


})
