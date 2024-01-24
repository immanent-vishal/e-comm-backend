require('dotenv').config()
require('./database/connection')

const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, error =>
  error
    ? console.log(error.message)
    : console.log(`Server is running on Port ${PORT}`)
)
