const { DataTypes } = require('sequelize')
const db = require('../database/DbConfig')

const Address = db.define('Address', {
  city: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  pincode: {
    type: DataTypes.STRING
  },
  house_no: {
    type: DataTypes.STRING
  }
})

module.exports = Address
