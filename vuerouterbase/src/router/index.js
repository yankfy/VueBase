import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import H from '@/components/H'
import HiA from '@/components/HiA'
import Hi2 from '@/components/Hi2'

import B1 from '@/components/B1'
import B2 from '@/components/B2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      // components: { // 有多个路由时，是components 。一个default 是那么没有起名字的那个
      //   default:Hello,
      //   left:B1,
      //   right:B2
      // }
      
    },
    {
      path: '/hi',
      // name: 'Hi', // name 可写可不写，但是还是有用的..有子路由加上这句话会有一个警告
      component: Hi,
      children:[
        {path:'/',name: 'Hello/Hi',component: Hi},
        {path:'hi1',name: 'HiA',component: HiA}, // TODO: 这里一个坑！！！不能加/
        {path:'hi2',name: 'HiB',component: Hi2}
      ]
    },
    {
      path:'/h',
      name:"H",
      component:H
    },
    {
      path: '/pony',
      // name: 'Hello',
      components: { // 有多个路由时，是components 。一个default 是那么没有起名字的那个
        default:Hello,
        left:B2,
        right:B1
      }
    },
  ]
})
