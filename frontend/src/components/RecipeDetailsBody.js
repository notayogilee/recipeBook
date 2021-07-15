import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core'
import Ingredient from './Ingredient'

const RecipeDetailsBody = ({ ingredients, directions }) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h4" color="secondary" >
            Ingredients
          </Typography>
          {ingredients && ingredients.map((ingredient) => (
            <Ingredient key={ingredient._id} ingredient={ingredient} />
          ))}
        </Box>

        <Typography variant="h4" color="secondary" >
          Directions
        </Typography>
        <Typography variant="h6" color="secondary" >
          <strong>{directions}</strong>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipeDetailsBody
