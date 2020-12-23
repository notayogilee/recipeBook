const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipeModel')
const protect = require('../middleware/auth')
const User = require('../models/userModel')

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

// @route POST /api/recipes
// @desc Create a recipe
// @desc Private
router.post('/', protect, async (req, res) => {
  const {
    title,
    description,
    level,
    imperialUnits,
    prepTime,
    cookTime,
    isPrivate,
    ingredients,
    directions,
    image,
    tips
  } = req.body

  const recipe = new Recipe({
    user: req.user._id,
    title,
    description,
    level,
    imperialUnits,
    prepTime,
    cookTime,
    isPrivate,
    ingredients,
    directions,
    image,
    tips
  })

  await recipe.save()

  const user = await User.findById(req.user._id)

  user.recipes = [...user.recipes, recipe]

  await user.save()

  res.status(201).send(`Added ${recipe.title} to recipes`)
})

// @route PUT /api/recipes/:id
// @desc Modify a recipe
// @access Private
router.put('/:id', protect, async (req, res) => {

})

// @route DELETE /api/recipes/:id
// @desc Delete a recipe
// @access Private
router.delete('/:id', protect, async (req, res) => {

  const recipe = await Recipe.findById(req.params.id)
  if (!recipe) {
    return res.status(404).send('Recipe not found')
  }
  if (recipe.user.toString() !== req.user._id.toString()) {
    return res.status(401).send('You are not authorized to delete this recipe')
  }
  await recipe.remove()
  res.send('Recipe deleted')
})
module.exports = router