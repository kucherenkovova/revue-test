const Vue = require('vue')
const store = require('../store')

module.exports = Vue.extend({
  template: require('./write.html'),
  data () {
    return {
      todo: '',
      todos: this.$select('todos')
    }
  },
  ready () {
    store.actions.addTodo('damn')
  },
  methods: {
    toggleTodo (index) {
      store.dispatch(store.actions.toggleTodo(index))
    },
    addTodo (todo = this.todo) {
      if (!todo)
        return
      store.dispatch(store.actions.addTodo(todo))
      this.todo = ''
    }
  }
})