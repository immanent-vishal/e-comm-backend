const Category = require('../models/category_product')

// Create a new Category

const createCategory = async (req, res) => {
  try {
    const response = await Category.create(req.body)

    return res
      .status(201)
      .json({ success: true, message: 'Category created successfully' })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Error creating category' })
  }
}

// Fetch All the Available Categories

const getAllCategory = async (req, res) => {
  try {
    const result = await Category.findAll()

    return res.status(200).json({ status: true, response: result })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' })
  }
}

// delete category by id
const deleteCategoryById = async (req, res) => {
  try {
    const id = req.params.id

    const deleted = await Category.destroy({ where: { id: id } })

    if (!deleted) {
      return res
        .status(200)
        .json({ success: true, message: 'Product Not Found' })
    } else
      return res
        .status(200)
        .json({ success: true, message: 'Category Deleted Successfully.' })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' })
  }
}

module.exports = {
  getAllCategory,
  createCategory,
  deleteCategoryById
}
