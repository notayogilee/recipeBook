import React, {useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Ingredient from '../components/Ingredient'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Fab,
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Hidden
} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {listRecipeDetails} from '../actions/recipeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

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
    flexDirection: 'column',
    alignItems: 'center',
    background: '#FCFFDB',
    paddingBottom: '4rem',
    width: '100%',
    minHeight: '100vh'
  },
}))


const RecipeScreen = ({ match }) => {
const dispatch = useDispatch()
const recipeDetails = useSelector(state => state.recipeDetails)
const {loading, error, recipe} = recipeDetails

  const classes = useStyles()

  useEffect(() => {
   dispatch(listRecipeDetails(match.params.id))
  }, [dispatch, match])

  return (
    <ThemeProvider theme={theme}>
      <>
        {loading ? <Loader /> : error ? <Message severity="error" message={error} /> : (
        <Container maxWidth="lg" className={classes.root}>
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
              src={recipe.image}
              title={recipe.title}
              alt={recipe.title}
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
              {recipe.title}
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
              Level: {recipe.level}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="secondary"
            >
              Prep Time: {recipe.prepTime}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="secondary"
            >
              Cook Time: {recipe.cookTime}
            </Typography>
          </Box>
          <Card>
            <CardContent>
            <Box>
           
              <Typography
                variant="h4"
                color="secondary"
              >
                Ingredients
             
              </Typography>
              {recipe.ingredients && recipe.ingredients.map((ingredient) =>  <Ingredient key={ingredient._id} ingredient={ingredient} />
              )}
            </Box>
          

              <Typography
                variant="h4"
                color="secondary"
              >
                Directions
            </Typography>
              <Typography
                variant="h6"
                color="secondary"
              >
                <strong>{recipe.directions}</strong>
              </Typography>
            </CardContent>
          </Card>
         
        </Container>
        )}
      </>
    </ThemeProvider>
  )
}

export default RecipeScreen
