import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'Count',
      component: () => import('@/pages/operate/index.vue')
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/count',
      component: Count
    }
  ]
})