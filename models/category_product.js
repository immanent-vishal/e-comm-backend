const { DataTypes } = require('sequelize')
const db = require('../database/DbConfig')

const Category = db.define('Category', {
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
})

module.exports = Category
