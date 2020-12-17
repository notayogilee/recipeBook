const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipeModel')

// @route GET /api/recipes
// @desc Get all recipes
// @access Public 
router.get('/', async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})

// @route GET /api/recipes/:id
// @desc Get recipe by id 
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
      return res.status(404).send('Recipe not found')
    }
    res.send(recipe)
  } catch (error) {
    console.log(chalk.red.bold(error))
    res.status(500).send(`Error: ${error}`)
  }
})

module.exports = router