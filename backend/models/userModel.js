const mongoose = require('mongoose')

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
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      title: {
        type: String,
        required: true,
        unique: true
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
    }
  ]
})

userSchema.statics.findRecipeInUsersRecipesAndRemove = async (recipeId) => {
  const users = await User.find({})

  users.forEach((user) => {

    const recipeIndex = user.recipes.map((recipe, index) => {
      if (recipe._id.toString() === recipeId) {
        return index
      }
    })

    user.recipes.splice(recipeIndex[0], 1)
    user.save()
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User