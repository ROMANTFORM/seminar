import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoView from '../views/VideoView.vue'
import DocsView from '../views/DocsView.vue'
import ConsultantView from '../views/ConsultantView.vue'
import HeadingView from '../views/HeadingView.vue'
import ThemesView from '../views/ThemesView.vue'
import AutomaticView from '../views/AutomaticView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'video-view',
    component: VideoView
  },
  {
    path: '/docs',
    name: 'docs-view',
    component: DocsView
  },
  {
    path: '/themes',
    name: 'themes-view',
    component: ThemesView
  },
  {
    path: '/automatic',
    name: 'automatic-view',
    component: AutomaticView
  },
  {
    path: '/consultant',
    name: 'consultant-view',
    component: ConsultantView
  },
  {
    path: '/heading',
    name: 'heading-view',
    component: HeadingView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
