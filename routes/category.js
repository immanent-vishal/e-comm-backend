const {
  createCategory,
  getAllCategory,
  deleteCategoryById
} = require('../controllers/category')

const CategoryRoutes = require('express').Router()

CategoryRoutes.get('', getAllCategory)
CategoryRoutes.post('', createCategory)
CategoryRoutes.delete('/:id', deleteCategoryById)

module.exports = CategoryRoutes
