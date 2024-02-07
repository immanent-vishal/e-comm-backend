const { DataTypes } = require('sequelize')
const db = require('../database/DbConfig')
const Address = require('./customer_address')

const Customer = db.define('Customer', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  dob: {
    type: DataTypes.DATE
  },
  photo: {
    type: DataTypes.STRING
  }
})

Customer.hasOne(Address, {
  foreignKey: 'customerId',
  onDelete: 'Cascade'
})

Address.belongsTo(Customer, {
  foreignKey: 'customerId',
  onDelete: 'Cascade'
})

module.exports = Customer
