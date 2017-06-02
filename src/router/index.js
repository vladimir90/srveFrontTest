import Vue from 'vue'
import Router from 'vue-router'



import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Home from '@/components/private/Home'
import Dashboard from '@/components/common/Dashboard'
import Profile from '@/components/common/Profile'
import Customers from '@/components/common/Customers'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'AuthLogin',
      component: Login
    },
    {
      path: '/register',
      name: 'AuthRegister',
      component: Register
    },
    {
        path: '/home',
        component: Home, children:[
        {
          path: '',
          component: Dashboard
        },
        {
          path: 'customers',
          component: Customers
        },
        {
          path: 'profile',
          component: Profile
        }
      ]
    }]

})
