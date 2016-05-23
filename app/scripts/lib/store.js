const Vue = require('vue')
const Revue = require('revue')
const createStore = require('redux').createStore
const applyMiddleware = require('redux').applyMiddleware

const reducer  = require('./reducers/index')
const thunk = require('redux-thunk').default
const actions = require('./actions/todos')

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const reduxStore = createStoreWithMiddleware(reducer)

const store = new Revue(Vue, reduxStore, actions)

if (typeof __DEV__ !== 'undefined' && __DEV__) {
  //noinspection JSAnnotator
  window.store = store
}

module.exports = store