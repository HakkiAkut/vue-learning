import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path:'/result',
      name:'Result',
      component:Result,
      props:true
    }
  ]
})
