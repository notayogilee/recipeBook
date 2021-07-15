const mongoose = require('mongoose')
const User = require('./userModel')

const reviewSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const recipeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true,
    default: 'beginner'
  },
  imperialUnits: {
    type: Boolean,
    required: true,
    default: true
  },
  prepTime: {
    type: String,
    required: true
  },
  cookTime: {
    type: String,
    required: true
  },
  isPrivate: {
    type: Boolean,
    required: true,
    default: false
  },
  ingredients: [
    {
      ingredient: { type: String, required: true },
      amount: { type: Number, required: true },
      unitOfMeasurement: { type: String, required: true },
      note: { type: String }
    }
  ],
  directions: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  tips: {
    type: String
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  }
})


module.exports = mongoose.model('Recipe', recipeSchema)