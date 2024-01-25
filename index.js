require('dotenv').config()
require('./database/connection')

const express = require('express')
const router = require('./routes/product')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, error =>
  error
    ? console.log(error.message)
    : console.log(`Server is running on Port ${PORT}`)
)
