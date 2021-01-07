const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const protect = require('../middleware/auth')
const Recipe = require('../models/recipeModel')

// @route POST /api/users
// @desc Register a user
// @access Public
router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.status(400).send({ message: 'User already exists' })
  }

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hashSync(password, salt)

  const user = await User.create({ firstName, lastName, email, password: hashedPassword })
  const id = user._id
  const token = jwt.sign({ id }, process.env.JWT_SECRET)
  res.status(201).json({ user, token })
})

// @route POST /api/users
// @desc Login user
// @access Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).send({ message: 'Please fill in all fields' })
  }
  const userInfo = await User.findOne({ email })
  if (!userInfo) {
    return res.status(400).send({ message: 'Credentials do not match' })
  }

  const comparePasswords = await bcrypt.compare(password, userInfo.password)
  if (!comparePasswords) {
    return res.status(400).send({ message: 'Credentials do not match' })
  }

  const user = await User.findOne({ email }).select('-password')

  const id = user._id
  const token = jwt.sign({ id }, process.env.JWT_SECRET)

  res.json({ user, token })
})

// @route PUT /api/users/myProfile/edit
// @desc Update a user profile
// @access Private
router.put('/myProfile/edit', protect, async (req, res) => {
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(404).send('No user found')
  }
  if (user._id.toString() !== req.user.id) {
    return res.status(401).send('You can only update your own account')
  }
  user.firstName = req.body.firstName || user.firstName
  user.lastName = req.body.lastName || user.lastName
  user.email = req.body.email || user.email
  if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10)
  }

  const updatedUser = await user.save()
  res.send(updatedUser)
})

// @route GET /api/users/myRecipes
// @desc Get all user recipes
// @access private
router.get('/myRecipes', protect, async (req, res) => {
  const user = await User.findById(req.user._id)
  res.send(user.recipes)
})

// @route PUT /api/users/myRecipes
// @desc Add a recipe to users recipes
// @access Private
router.put('/myRecipes', protect, async (req, res) => {
  const user = await User.findById(req.user._id)

  const recipeExists = user.recipes.find((recipe) => recipe._id.toString() === req.body._id)

  if (recipeExists) {
    return res.status(401).send('You already have this recipe in your recipes')
  }
  const recipe = await Recipe.findById(req.body._id)

  user.recipes = [...user.recipes, recipe]
  await user.save()
  res.send(`Recipe ${recipe.title} was added to your recipes`)
})

// router PUT /api/users/myRecipes/:id
// @desc Edit a recipe in my recipes
// @access Private
router.put('/myRecipes/:id', protect, async (req, res) => {
  const user = await User.findById(req.user._id)
  const recipe = user.recipes.find((recipe) => recipe._id.toString() === req.params.id)
  console.log(recipe)
  if (!recipe) {
    return res.status(404).send('No recipe found')
  }
  try {
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

    const updatedUserRecipe = await user.save()
    res.send(updatedUserRecipe)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }

})

// @route DELETE /api/users/myRecipes/:id
// @desc Remove a recipe from users recipes
// @access Private
router.delete('/myRecipes/:id', protect, async (req, res) => {
  const user = await User.findById(req.user._id)
  const index = user.recipes.findIndex((recipe) => recipe._id.toString() === req.params.id)

  if (index !== -1) {
    user.recipes.splice(index, 1)
    user.save()
    return res.send('Recipe deleted')
  }

  res.status(404).send('Recipe not found')
})

// @route DELETE /api/users/:id
// @desc Delete a user
// @access Private
router.delete('/:id', protect, async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) { return res.status(404).send('User not found') }
  if (user._id.toString() !== req.user.id) {
    return res.status(401).send('You can only delete your own account')
  }

  try {
    await user.remove()
    res.json({ message: 'User removed' })
  } catch (error) {
    res.status(404).send('User not found')
  }
})

// @route GET /api/users
// @desc Get all users
// @access Private
router.get('/', protect, async (req, res) => {
  const users = await User.find({})
  res.send(users)
})

// @route GET /api/users/myProfile
// @desc Get a user by id
// @access Public - will be private
router.get('/myProfile', protect, async (req, res) => {
  const _id = req.user._id
  try {
    const user = await User.findById(_id)

    if (!user) {
      return res.send('No user found')
    }
    res.send(user)
  } catch (error) {
    console.log(chalk.red.bold(error))
    res.send(`Error: ${error}`)
  }
})

module.exports = router