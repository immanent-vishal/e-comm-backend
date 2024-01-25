// fetch all the data service

const _getDataService = async model => {
  try {
    const response = await model.findAll()
    return response
  } catch (error) {
    return error.message
  }
}

// fetch  the data by id  service

const _getDataByIdService = async (model, id) => {
  try {
    const response = await model.findByPk(id)
    return response
  } catch (error) {
    return error.message
  }
}

// create  the data service

const _createDataService = async (model, data, options = {}) => {
  try {
    const response = await model.create(data, options)
    return response
  } catch (error) {
    return error.message
  }
}

// update the data service

const _updateDataService = async (model, data, options = {}) => {
  try {
    const response = await model.update(data, options)
    return response
  } catch (error) {
    return error.message
  }
}

// delete the data service

const _deleteDataByIdService = async (model, id) => {
  try {
    const response = await model.delete(id)
    return response
  } catch (error) {
    return error.message
  }
}

module.exports = {
  _getDataService,
  _getDataByIdService,
  _createDataService,
  _updateDataService,
  _deleteDataByIdService
}
