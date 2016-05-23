// import store from '../store'
const Vue = require('vue')

module.exports = Vue.extend({
  template: require('./read.html'),
  data () {
    return {
      todos: this.$select('todos')
    }
  }
})