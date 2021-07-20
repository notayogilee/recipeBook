import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { myRecipeList, myRecipeListRemoveRecipe, myRecipeListAddRecipe } from '../actions/myRecipesActions'
import theme from '../utils/Theme'
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core'
import { Favorite, FavoriteBorder, ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '4rem',
    width: '100%',
    height: '100vh',
    minHeight: '90vh'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 450,
    position: 'relative'
  },
  media: {
    height: '50%',
    top: 0,
    // paddingTop: '56.25%'
  }
}))

const RecipeItem = ({ recipe, userRecipe }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // console.log(recipe)

  const [myRecipe, setMyRecipe] = useState(false)

  useEffect(() => {
    setMyRecipe(userRecipe)
  }, [setMyRecipe])

  const myRecipeRemoveHandler = (id) => {
    dispatch(myRecipeListRemoveRecipe(id))
    setMyRecipe(false)
  }

  const myRecipeAddHandler = (id) => {
    dispatch(myRecipeListAddRecipe(id))
    setMyRecipe(true)
  }
  return (
    <Grid item xs={8} md={6} lg={4} key={recipe._id}>
      <Card className={classes.card} elevation={4}>
        <CardHeader
          title={recipe.title}
        />
        <CardMedia
          className={classes.media}
          component="img"
          src={recipe.image}
        />
        <CardContent>
          <Typography>
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: '0',
            width: '100%'
          }}>
          <IconButton
            onClick={() => {
              myRecipe ? myRecipeRemoveHandler(recipe._id) : myRecipeAddHandler(recipe._id)
            }
            }
          >
            {myRecipe ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <Link to={`/recipe/${recipe._id}`}>
            <IconButton>
              <ExpandMore
                color="secondary"
                fontSize="large"
              />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default RecipeItem
