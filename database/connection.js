const database = require('./DbConfig')
require('../models/product')
require('../models/product_image')
require('../models/category_product')
require('../models/customer_address')
require('../models/customer')

try {
  database.sync({ force: false, alter: true })
  console.log('Syncing database')
} catch (error) {
  console.log('error syncing database')
}

module.exports = database
