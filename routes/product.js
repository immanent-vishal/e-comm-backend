const {
  getAllProduct,
  createProduct,
  updateProductById,
  getProductById
} = require('../controllers/product')

const ProductRoutes = require('express').Router()

ProductRoutes.get('', getAllProduct)
ProductRoutes.post('', createProduct)
ProductRoutes.put('/:id', updateProductById)
ProductRoutes.get('/:id', getProductById)

module.exports = ProductRoutes
