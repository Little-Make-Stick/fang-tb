import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import productDetail from '../views/productDetail.vue'
import user from '../views/user.vue'
import shoppingCar from '../views/shoppingCar.vue'
import collection from '../views/collection.vue'
import accountLogin from '../views/accountLogin.vue'
import noteLogin from '../views/noteLogin.vue'
import productDecoration from '../views/productDecoration.vue'
import productReview from '../views/productReview.vue'
import productService from '../views/productService.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    children:[
      {
        path: 'account',
        name: 'accountLogin',
        component: accountLogin
      },
      {
        path: 'note',
        name: 'noteLogin',
        component: noteLogin
      }
    ],
    redirect: '/login/account'
  },
  {
    path: '/register',
    name: 'Register',
    component: register
  },
  {
    path: '/user',
    name: 'User',
    component: user
  },
  {
    path: '/shoppingCar',
    name: 'Car',
    component: shoppingCar
  },
  {
    path: '/collection',
    name: 'Collection',
    component: collection
  },
  {
    path: '/product/detail/:id/',
    name: 'ProductDetail',
    component: productDetail,
    props: true,
    children:[
      {
        path: 'decoration',
        name: 'decoration',
        component: productDecoration
      },
      {
        path: 'review',
        name: 'review',
        component: productReview
      },
      {
        path: 'service',
        name: 'service',
        component: productService
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
