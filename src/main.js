import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import $ from 'jquery'
import Auth from 'j-toker'

import 'script!jquery'
// import 'script!foundation-sites'

import App from './components/App.vue'
import Hot from './components/Hot.vue'
import About from './components/About.vue'
import Quote from './components/Quote.vue'

// Initialize Global variables
window.Global = {
  apiUrl: 'http://192.168.0.6:3000'
}

// Initialize j-toker
$.auth.configure({
  apiUrl: window.Global.apiUrl
})

window.$ = $

// Install plugins
Vue.use(Router)
Vue.use(Resource)

// Set up a new router
var router = new Router()

// Route config
router.map({
  '/hot':{
    name: 'hot',
    component: Hot
  },
  '/about':{
    name: 'about',
    component: About
  },
  '/quote':{
    name: 'quote',
    component: Quote
  }
})

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect hot
router.redirect({
  '*': '/hot'
})

// Start up our app
router.start(App, '#app')
