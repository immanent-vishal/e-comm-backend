const { DataTypes } = require('sequelize')
const db = require('../database/DbConfig')
const Images = require('./product_image')
const Category = require('./category_product')

const Product = db.define('Product', {
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.FLOAT
  },
  discountPercentage: {
    type: DataTypes.FLOAT
  },
  rating: {
    type: DataTypes.FLOAT
  },
  stock: {
    type: DataTypes.INTEGER
  },
  brand: {
    type: DataTypes.STRING
  }
})

Product.hasMany(Images, {
  foreignKey: 'productId',
  onDelete: 'Cascade'
})

Images.belongsTo(Product, {
  foreignKey: 'productId',
  onDelete: 'Cascade'
})

Product.belongsTo(Category, {
  foreignKey: 'categoryId'
})

Category.hasOne(Product, {
  foreignKey: 'categoryId'
})

module.exports = Product
