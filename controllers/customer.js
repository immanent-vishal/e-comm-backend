const Customer = require('../models/customer')
const Address = require('../models/customer_address')

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const { address } = req.body
    const customer = await Customer.create(req.body)
    await Address.create({ ...address, customerId: customer.id })
    return res
      .status(201)
      .json({ success: true, message: 'Customer created successfully' })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

const updateCustomerById = async (req, res) => {
  try {
    const id = req.params.id
    const address = req.body.address

    const [updateRow] = await Customer.update(req.body, { where: { id: id } })

    if (updateRow > 0) {
      await Address.update(address, { where: { customerId: id } })
    }
    return res
      .status(201)
      .json({ success: true, message: 'Address updated successfully' })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

const deleteCustomerById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await Customer.destroy({ where: { id: id } })
    return res
      .status(200)
      .json({ success: true, message: 'Customer  deleted successfully' })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

const getAllCustomer = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

const getCustomerById = async (req, res) => {
  try {
    const id = req.params.id

    const customer = await Customer.findByPK(id, { include: [Address] })

    return res.status(200).json({ success: true, response: customer })
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

module.exports = {
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
  getAllCustomer,
  getCustomerById
}
