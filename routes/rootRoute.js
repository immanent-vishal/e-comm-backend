const CategoryRoutes = require('./category')
const ProductRoutes = require('./product')

const router = require('express').Router()

router.use('/product', ProductRoutes)
router.use('/category', CategoryRoutes)

module.exports = router
