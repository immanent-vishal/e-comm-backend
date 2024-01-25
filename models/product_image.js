const { DataTypes } = require('sequelize')
const db = require('../database/DbConfig')

const Images = db.define('Images', {
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Images
