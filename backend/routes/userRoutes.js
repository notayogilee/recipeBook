const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const protect = require('../middleware/auth')

// @route POST /api/users
// @desc Register a user
// @access Public
router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.status(400).send('User already exists')
  }

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hashSync(password, salt)

  const user = await User.create({ firstName, lastName, email, password: hashedPassword })
  const id = user._id
  const token = jwt.sign({ id }, process.env.JWT_SECRET)
  res.status(201).send({ user, token })
})

// @route POST /api/users
// @desc Login user
// @access Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).send('Credentials do not match')
  }

  const comparePasswords = await bcrypt.compare(password, user.password)
  if (!comparePasswords) {
    return res.status(400).send('Credentials do not match')
  }

  const id = user._id
  const token = jwt.sign({ id }, process.env.JWT_SECRET)
  res.send({ user, token })
})

// @route PUT /api/users/:id
// @desc Update a user profile
// @access Private
router.put('/:id', protect, async (req, res) => {
  const user = await User.findById(req.params.id)
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
// @access Public - will be private
router.get('/', async (req, res) => {
  const users = await User.find({})
  res.send(users)
})

// @route GET /api/users/:id
// @desc Get a user by id
// @access Public - will be private
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

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