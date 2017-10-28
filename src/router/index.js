import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import PhunkyPhraser from '@/components/PhunkyPhraser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/PhunkyPhraser',
      name: 'PhunkyPhraser',
      component: PhunkyPhraser
    } 
  ]
})
