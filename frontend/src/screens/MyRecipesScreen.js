import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListRecipes } from '../actions/userActions'
import { Redirect } from 'react-router-dom'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Container,
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
const MyRecipesScreen = () => {
  const dispatch = useDispatch()
  const myRecipes = useSelector(state => state.myRecipes)
  const { loading, error, recipes } = myRecipes

  const classes = useStyles()



  useEffect(() => {
    dispatch(userListRecipes())
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
            My Recipes
          </Typography>
          {loading
            ? <Loader />
            : error
              ? <Message severity="error" message={error} />
              : <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={4} style={{ justifyContent: "center", backgroundColor: "#FCFFDB" }}>
                  {recipes.length === 0 ? (
                    <Typography variant="h3">
                      You currently don't have any recipes
                    </Typography>
                  ) : (
                    recipes.map((recipe) => (
                      <RecipeItem key={recipe._id} recipe={recipe} />
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

