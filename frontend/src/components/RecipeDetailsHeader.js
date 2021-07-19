import React from 'react'
import {
  Box,
  Typography,
  CardMedia,
  Hidden
} from '@material-ui/core'

const RecipeDetailsHeader = ({ title, level, prepTime, cookTime, image }) => {
  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          marginBottom: "1rem"
        }}
      >
        <Hidden xsDown>
          <CardMedia
            component="img"
            src={image}
            title={title}
            alt={title}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%"
            }}
          />
        </Hidden>
        <Typography
          variant="h1"
          component="div"
          color="primary"
          style={{
            fontFamily: "Righteous",
            padding: "2rem",
            textAlign: "center"
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginBottom: "1rem"
        }}
      >
        <Typography
          variant="h5"
          component="div"
          color="secondary"
        >
          Level: {level}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          color="secondary"
        >
          Prep Time: {prepTime}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          color="secondary"
        >
          Cook Time: {cookTime}
        </Typography>
      </Box>
    </div>
  )
}

export default RecipeDetailsHeader
