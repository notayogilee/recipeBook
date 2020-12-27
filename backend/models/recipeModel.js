const mongoose = require('mongoose')

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
    type: String,
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
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe