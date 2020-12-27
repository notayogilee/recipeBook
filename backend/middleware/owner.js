const Recipe = require('../models/recipeModel')

const owner = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
      return res.status(404).send('Recipe not found')
    }
    if (recipe.user.toString() !== req.user._id.toString()) {
      return res.status(401).send('You are not authorized to modify or delete this recipe')
    }
    next()
  } catch (error) {
    res.status(401).send({ error: "You are not authorized to modify or delete this recipe" })
  }
}

module.exports = owner