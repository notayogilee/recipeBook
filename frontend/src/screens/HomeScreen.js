import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRecipes } from '../actions/recipeActions'
import { Redirect } from 'react-router-dom'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Container
} from '@material-ui/core'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Header from '../components/Header'
import RecipeItem from '../components/RecipeItem'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffdd71',
      main: '#ffab40',
      dark: '#c77c02',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#8d6e63',
      dark: '#5f4339',
      contrastText: '#fff',
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    background: '#FCFFDB',
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
const HomeScreen = () => {
  const dispatch = useDispatch()
  const recipeList = useSelector(state => state.recipeList)
  const { loading, error, recipes } = recipeList

  const classes = useStyles()

  useEffect(() => {
    dispatch(listRecipes())
  }, [dispatch])

  const isLoggedIn = localStorage.getItem('userInfo')

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
                <Grid container spacing={4} style={{ justifyContent: "center", backgroundColor: "#FCFFDB" }}>
                  {recipes.map((recipe) => (
                    <RecipeItem key={recipe._id} recipe={recipe} />
                  ))}
                </Grid>
              </Container>
          }
        </Container>
      </ThemeProvider>
    </>
  )
}

export default HomeScreen
