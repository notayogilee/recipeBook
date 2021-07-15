import React from 'react'
import { Link } from 'react-router-dom'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Fab,
  Box,
  Typography,
  CardMedia,
  Hidden
} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
        <Hidden xsDown>
          <Link
            to="/recipes"
            style={{
              textDecoration: "none"
            }}>
            <Fab
              variant="extended"
              color="secondary"
            >
              <ArrowBackIosIcon />
              Back
            </Fab>
          </Link>
        </Hidden>
      </Box>
      <Hidden smUp>
        <Link
          to="/recipes"
          style={{
            textDecoration: "none",
            paddingBottom: "1rem"
          }}>
          <Fab
            variant="extended"
            color="secondary"
          >
            <ArrowBackIosIcon />
            Back
          </Fab>
        </Link>
      </Hidden>
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
