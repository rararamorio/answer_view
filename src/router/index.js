import Vue from 'vue'
import VueRouter from 'vue-router'
import Answer from '../views/Answer.vue'
import PreviewForm from '../views/PreviewForm.vue'
import Preview from '../views/Preview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Answer',
    component: Answer
  },
  {
    path: '/view',
    name: 'PreviewForm',
    component: PreviewForm
  },
  {
    path: '/preview/:name',
    name: 'Preview',
    component: Preview, props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
