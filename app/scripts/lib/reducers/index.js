const combineReducers = require('redux').combineReducers
const todos = require('./todos')
const admin = require('./admin')
const counter = require('./counter')

module.exports = combineReducers({
  todos,
  admin,
  counter
})