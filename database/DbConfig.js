const Sequelize = require('sequelize')

const dbName = process.env.DATABASE_NAME
const dbUser = process.env.DATABASE_USERNAME
const dbPassword = process.env.DATABASE_PASSWORD

const database = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'postgres'
})
;(async function () {
  try {
    await database.authenticate()
    console.log(
      'Connection to the PostgreSQL database has been established successfully.'
    )
  } catch (error) {
    console.error(
      'Unable to connect to the PostgreSQL database:',
      error.message
    )
  }
})()
module.exports = database
