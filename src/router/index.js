import {createRouter, createWebHistory} from 'vue-router'

import store from '../store'

import MyAccount from '../views/MyAccount.vue'
import Home from '../views/Home.vue'
import ContactMe from '../views/ContactMe.vue'
import Category from "@/views/Category"
import SubCategory from "@/views/SubCategory";
import Post from "@/views/Post";
import LogIn from "@/views/LogIn";
import SignUp from "@/views/SignUp";
import Search from "@/views/Search";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact-me',
    name: 'ContactMe',
    component: ContactMe
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: Category
  },
  {
    path: '/:category_slug/:sub_category_slug',
    name: 'SubCategory',
    component: SubCategory
  },
  {
    path: '/:category_slug/:sub_category_slug/:post_slug',
    name: 'Post',
    component: Post
  },
  {
    path: '/sign-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({name: 'LogIn', query: {to: to.path}});
  } else {
    next()
  }
})

export default router
