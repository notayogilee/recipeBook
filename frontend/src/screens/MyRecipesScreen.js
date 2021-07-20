import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myRecipeList } from '../actions/myRecipesActions'
import { Redirect } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import theme from '../utils/Theme'
import {
  Typography,
  Grid,
  Container,
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
const MyRecipesScreen = () => {
  const dispatch = useDispatch()
  const myRecipes = useSelector(state => state.myRecipes)
  // const recipes = useSelector(state => state.userRecipes)
  const { loading, error, recipes } = myRecipes

  const classes = useStyles()

  useEffect(() => {
    dispatch(myRecipeList())
  }, [dispatch])

  const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'))

  if (!isLoggedIn) {
    return <Redirect to="/login" />
  }
  console.log(recipes)
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
            My Recipes
          </Typography>
          {loading
            ? <Loader />
            : error
              ? <Message severity="error" message={error} />
              : <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={4} style={{ justifyContent: "center" }}>
                  {recipes && recipes.length === 0 ? (
                    <Typography variant="h3">
                      You currently don't have any recipes
                    </Typography>
                  ) : (
                    recipes && recipes.map((recipe) => (
                      <RecipeItem
                        key={recipe._id}
                        recipe={recipe}
                        userRecipe={isLoggedIn.user.recipes.includes(recipe._id)}
                      />
                    )))}
                </Grid>
              </Container>
          }
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyRecipesScreen

