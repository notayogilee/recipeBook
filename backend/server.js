const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const users = require('./data/users')
const recipes = require('./data/recipes')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

// user routes 
app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  console.log(req.params)
  const user = users.find((user) => user._id === req.params.id)
  if (!user) {
    return res.send('User not found')
  }
  res.json(user)
})

// recipe routes
app.get('/api/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/api/recipes/:id', (req, res) => {
  const recipe = recipes.find(recipe => recipe._id === req.params.id)
  res.send(recipe)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})