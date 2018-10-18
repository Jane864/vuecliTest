import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',     
      name:'Hello',
      component:Hello
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,      
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/h1',
      component:Hi1,
      alias:'/rth1'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
