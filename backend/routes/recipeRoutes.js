const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipeModel')
const protect = require('../middleware/auth')
const owner = require('../middleware/owner')
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

  try {
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

    const recipeTitle = await Recipe.findOne({ title })

    if (recipeTitle) {
      return res.status(400).send('That title is taken, please change the title')
    }

    await recipe.save()

    const user = await User.findById(req.user._id)

    user.recipes = [...user.recipes, recipe]

    await user.save()

    res.status(201).send(`Added ${recipe.title} to recipes`)
  } catch (error) {
    console.error(error)
    throw new Error({ msg: error })
  }
})

// @route PUT /api/recipes/:id
// @desc Modify a recipe
// @access Private
router.put('/:id', protect, owner, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if (!recipe) {
    return res.status(404).send('No recipe found')
  }

  recipe.title = req.body.title || recipe.title
  recipe.description = req.body.description || recipe.description
  recipe.level = req.body.level || recipe.level
  recipe.imperialUnits = req.body.imperialUnits || recipe.imperialUnits
  recipe.prepTime = req.body.prepTime || recipe.prepTime
  recipe.cookTime = req.body.cookTime || recipe.cookTime
  recipe.isPrivate = req.body.isPrivate || recipe.isPrivate
  recipe.ingredients = req.body.ingredients || recipe.ingredients
  recipe.directions = req.body.directions || recipe.directions
  recipe.image = req.body.image || recipe.image
  recipe.tips = req.body.tips || recipe.tips

  const updatedRecipe = await recipe.save()
  res.send(updatedRecipe)
})

// @route DELETE /api/recipes/:id
// @desc Delete a recipe
// @access Private
router.delete('/:id', protect, owner, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  await User.findRecipeInUsersRecipesAndRemove(req.params.id)
  await recipe.remove()
  res.send('Recipe deleted')
})
module.exports = router