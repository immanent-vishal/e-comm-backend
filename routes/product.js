const { getAllProduct } = require('../controllers/product')

const router = require('express').Router()

router.get('', getAllProduct)
router.get('/:id', getProductById)
router.post('', createProduct)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)

module.exports = router
