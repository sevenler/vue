import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: 'goods',
          component: Goods 
        }
      ]
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
