import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../pages/TodoList.vue'
import AddTodo from '../pages/AddTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: TodoList
  },
  {
    path: '/add-user',
    name: 'add',
    component: AddTodo
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
