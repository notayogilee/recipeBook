const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const chalk = require('chalk')
const User = require('./models/userModel')
const Recipe = require('./models/recipeModel')
const userRoutes = require('./routes/userRoutes')
const recipeRoutes = require('./routes/recipeRoutes')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')

require('dotenv').config()

connectDB()

const app = express()

app.use(express.json({ extended: false }))

app.use('/api/users', userRoutes)
app.use('/api/recipes', recipeRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(chalk.cyan.underline(`Server running on port ${PORT}`))
})