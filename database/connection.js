const database = require('./DbConfig')

try {
  database.sync({ force: false, alter: true })

  console.log('Syncing database')
} catch (error) {
  console.log('error syncing database')
}

module.exports = database
