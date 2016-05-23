// this is a reducer used in test.js
const defaultAdmin = { info: { name: 'egoist' } }
module.exports = function admin (admin = defaultAdmin, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return Object.assign({}, admin, {
        info : { name: 'sox' }
      })
    default:
      return admin
  }
}