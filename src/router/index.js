import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/index.vue'
import mymessage from '@/page/mymessage.vue'
import login from '@/page/login.vue'
import more from '@/page/more.vue'
import desc from '@/page/desc.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
    	path:'/message',

    	component:mymessage
    },
     {
    	path:'/login',

    	component:login
    },
     {
    	path:'/more',
    	component:more
    },
    {
      path:'/topic/:id',
      component:desc
    }
  ]
})
