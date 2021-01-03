import React from 'react'
import {
  Box,
  Typography
} from '@material-ui/core'

const Ingredient = ({ ingredient }) => {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          style={{
            color: "#8d6e63"
          }}
        >
          <strong> {ingredient.amount} {ingredient.unitOfMeasurement} of {ingredient.note} {ingredient.ingredient}</strong>
        </Typography>
      </Box>
    </>
  )
}

export default Ingredient
