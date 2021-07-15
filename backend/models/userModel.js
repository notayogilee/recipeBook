const mongoose = require('mongoose')
const Recipe = require('./recipeModel')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
})

userSchema.statics.findRecipeInUsersRecipesAndRemove = async (recipeId) => {
  const users = await User.find({})

  users.forEach((user) => {
    const index = user.recipes.findIndex((recipe) => recipe._id.toString() === recipeId)

    if (index !== -1) {
      user.recipes.splice(index, 1)
      user.save()
    }
  })
}

module.exports = mongoose.model('User', userSchema)