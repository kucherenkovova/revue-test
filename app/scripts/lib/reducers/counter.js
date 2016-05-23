// this is a reducer used in test.js
module.exports = function counter (counter = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return counter + 1
    default:
      return counter
  }
}