const db = require('../database/DbConfig')

const Account = db.define('Account', {
  holder: {
    type: DataTypes.STRING
  },
  number: {
    type: DataTypes.STRING
  },
  branch: {
    type: DataTypes.STRING
  }
})

module.exports = Address
