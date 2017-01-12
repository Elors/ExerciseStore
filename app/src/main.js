import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'


Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true
Vue.use(ElementUI)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
