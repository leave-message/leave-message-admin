// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


import VueRouter from'vue-router'
import Login from'./components/Login'
import Register from './components/Register'
import Home from './components/Home'
Vue.use(VueRouter)



var router = new VueRouter({
  routes :[
    {path:"/",name:'homeLink', component:Home},
    {path:"/login",name:'loginLink',component:Login},
    {path:"/register",name:'registerLink',component:Register}
  ],
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: {
    "app": App,
  },
  template: '<app></app>'
})
