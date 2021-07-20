import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRecipes } from '../actions/recipeActions'
import { Redirect } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import theme from '../utils/Theme'
import {
  Typography,
  Grid,
  Container
} from '@material-ui/core'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Header from '../components/Header'
import RecipeItem from '../components/RecipeItem'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.tertiary.main,
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
const PublicRecipesScreen = () => {
  const dispatch = useDispatch()
  const recipeList = useSelector(state => state.recipeList)
  const { loading, error, recipes } = recipeList
  console.log(recipes)
  const classes = useStyles()

  const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'))

  useEffect(() => {
    dispatch(listRecipes())
  }, [dispatch])

  if (!isLoggedIn) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />

          <Typography
            variant="h1"
            component="div"
            color="primary"
            style={{
              fontFamily: "Righteous",
              padding: "2rem",
              // textAlign: "center"
            }}
          >
            Recipes
          </Typography>
          {loading
            ? <Loader />
            : error
              ? <Message severity="error" message={error} />
              : <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={4} style={{ justifyContent: "center" }}>
                  {recipes && recipes.map((recipe) => (
                    <RecipeItem
                      key={recipe._id}
                      recipe={recipe}
                      userRecipe={isLoggedIn.user.recipes.includes(recipe._id)}
                    />
                  ))}
                </Grid>
              </Container>
          }
        </Container>
      </ThemeProvider>
    </>
  )
}

export default PublicRecipesScreen
