const mongoose = require('mongoose')
const dotenv = require('dotenv')
const chalk = require('chalk')
const users = require('./data/users')
const recipes = require('./data/recipes')
const User = require('./models/userModel')
const Recipe = require('./models/recipeModel')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // Clear db before seeding
    await Recipe.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const sampleRecipes = await recipes.map((recipe, index) => {
      const userId = createdUsers[index]._id
      return { ...recipe, user: userId }
    })

    const createdRecipes = await Recipe.insertMany(sampleRecipes)

    // Add user created recipe to user recipes array
    const updatedUsers = await createdRecipes.map((recipe, index) => {

      const id = recipe._id
      const user = createdUsers[index]
      user.recipes = [...user.recipes, id]
      return user
    }
    )

    await User.deleteMany()
    await User.insertMany(updatedUsers)

    console.log(chalk.green.inverse('Data Imported!'))
    process.exit()
  } catch (error) {
    console.error(chalk.red.inverse.bold`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Recipe.deleteMany()
    await User.deleteMany()

    console.log(chalk.red.inverse('Data Destroyed!'))
    process.exit()
  } catch (error) {
    console.error(chalk.red.inverse.bold`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
