import Vue from 'vue'

module.exports = (function home () {
  'use strict'

  const events = require('./../lib/events')
  const write = require('../lib/components/write')
  const read = require('../lib/components/read')

  let ctrl = {}
  let vm = {}
  
  function initVue () {
    vm = new Vue({
      el: '#todo',
      components: {
        write,
        read
      }
    })
  }

  ctrl.init = function init (toRoute) {
    console.log('home.js - init home controller.')

    initVue()

    ctrl.transitionIn(toRoute)
  }

  ctrl.transitionIn = function transitionIn (route) {
    events.transition.dispatch('transition-in-end', route)
  }
  
  ctrl.transitionOut = function transitionOut (fromRoute, toRoute) {
    events.transition.dispatch('transition-out-end', fromRoute)
  } 

  ctrl.destroy = function destroy () {
  }

  return ctrl
})()
