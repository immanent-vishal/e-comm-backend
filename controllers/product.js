const Category = require('../models/category_product')
const Product = require('../models/product')
const Images = require('../models/product_image')

// create  product
const createProduct = async (req, res) => {
  const { imageUrls } = req.body
  try {
    const product = await Product.create(req.body)
    if (imageUrls.length > 0) {
      const imagesData = imageUrls.map(image => ({
        image_url: image,
        productId: product.id
      }))
      await Images.bulkCreate(imagesData)
    }
    return res
      .status(201)
      .json({ status: true, message: 'Product created successfully' })
  } catch (error) {
    console.error('Error creating product:', error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Failed to create product' })
  }
}

// Fetch all products available
const getAllProduct = async (req, res) => {
  try {
    const result = await Product.findAll({
      include: [{ model: Category }, { model: Images }]
    })
    return res.status(200).json({ success: true, response: result })
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server error' })
  }
}

// delete product by id
const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id

    const deleted = await Product.destroy({ where: { id: id } })
    if (!deleted) {
      throw new Error('Product not found')
    } else
      return res
        .status(200)
        .json({ success: true, message: 'Product Deleted Successfully.' })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

// update Product by Id

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id
    const { imageUrls } = req.body
    const [updateRow] = await Product.update(req.body, { where: { id: id } })
    await Images.destroy({ where: { productId: id } })
    if (imageUrls.length > 0) {
      const imageData = imageUrls.map(imageUrl => ({
        image_url: imageUrl,
        productId: id
      }))

      await Images.bulkCreate(imageData, { where: { productId: id } })
    }
    return res
      .status(200)
      .json({ success: true, message: 'Product updated successfully' })
  } catch (error) {
    console.log(error.message, 'error updating')
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

//Fetch Products by id
const getProductById = async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Images
        },
        {
          model: Category
        }
      ]
    })
    return res.status(200).json({ succcess: true, response: product })
  } catch (error) {
    console.log(error.message, 'error')
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

module.exports = {
  getAllProduct,
  deleteProductById,
  createProduct,
  updateProductById,
  getProductById
}
