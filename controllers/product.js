const Product = require('../models/product')
const {
  getDataService,
  _getDataByIdService
} = require('../commonServices/services')

// const productData = [
//   {
//     title: 'Product 1',
//     description: 'Description for Product 1',
//     price: 49.99,
//     discountPercentage: 20,
//     rating: 4.3,
//     stock: 100,
//     brand: 'Brand X'
//   },
//   {
//     title: 'Product 2',
//     description: 'Description for Product 2',
//     price: 39.99,
//     discountPercentage: 15,
//     rating: 4.2,
//     stock: 75,
//     brand: 'Brand Y'
//   },
//   {
//     title: 'Product 3',
//     description: 'Description for Product 3',
//     price: 59.99,
//     discountPercentage: 25,
//     rating: 4.5,
//     stock: 50,
//     brand: 'Brand Z'
//   },
//   {
//     title: 'Product 4',
//     description: 'Description for Product 4',
//     price: 29.99,
//     discountPercentage: 10,
//     rating: 4.0,
//     stock: 120,
//     brand: 'Brand A'
//   },
//   {
//     title: 'Product 5',
//     description: 'Description for Product 5',
//     price: 79.99,
//     discountPercentage: 30,
//     rating: 4.8,
//     stock: 80,
//     brand: 'Brand B'
//   },
//   {
//     title: 'Product 6',
//     description: 'Description for Product 6',
//     price: 44.99,
//     discountPercentage: 18,
//     rating: 4.1,
//     stock: 90,
//     brand: 'Brand C'
//   },
//   {
//     title: 'Product 7',
//     description: 'Description for Product 7',
//     price: 34.99,
//     discountPercentage: 12,
//     rating: 4.4,
//     stock: 60,
//     brand: 'Brand D'
//   },
//   {
//     title: 'Product 8',
//     description: 'Description for Product 8',
//     price: 69.99,
//     discountPercentage: 28,
//     rating: 4.7,
//     stock: 110,
//     brand: 'Brand E'
//   },
//   {
//     title: 'Product 9',
//     description: 'Description for Product 9',
//     price: 24.99,
//     discountPercentage: 8,
//     rating: 3.9,
//     stock: 40,
//     brand: 'Brand F'
//   },
//   {
//     title: 'Product 10',
//     description: 'Description for Product 10',
//     price: 54.99,
//     discountPercentage: 22,
//     rating: 4.6,
//     stock: 95,
//     brand: 'Brand G'
//   }
// ]
// async function bulkCreateProducts (productData) {
//   try {
//     const createdProducts = await Product.bulkCreate(productData)
//     console.log(`Successfully created ${createdProducts.length} products.`)
//     return createdProducts
//   } catch (error) {
//     console.error('Error creating products:', error)
//     throw error // Re-throw the error to handle it at the calling site
//   }
// }

// bulkCreateProducts(productData)

const getAllProduct = async (req, res) => {
  try {
    const result = await getDataService(Product)
    // console.table(result)
  } catch (error) {}
}

const getProductById = async (req, res) => {
  const id = req.params.id
  try {
    const result = await _getDataByIdService(Product, id)
  } catch (error) {}
}

const createProduct = async (req, res) => {
  try {
    const result = await _createProductService(Product, req.body)
  } catch (error) {}
}

const updateProductById = async (req, res) => {
  try {
    const result = await _updateProductService(Product, id, options)
  } catch (error) {}
}

module.exports = {
  getAllProduct,
  getProductById,
  createProduct
}
