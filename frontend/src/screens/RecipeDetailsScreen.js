import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { listRecipeDetails } from '../actions/recipeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import RecipeDetailsHeader from '../components/RecipeDetailsHeader'
import RecipeDetailsBody from '../components/RecipeDetailsBody'

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

const RecipeDetailsScreen = ({ match, history }) => {
  console.log(history)
  const dispatch = useDispatch()
  const recipeDetails = useSelector(state => state.recipeDetails)
  const {
    loading,
    error,
    recipe: {
      title,
      level,
      cookTime,
      prepTime,
      image,
      ingredients,
      directions
    }
  } = recipeDetails

  const classes = useStyles()

  useEffect(() => {
    dispatch(listRecipeDetails(match.params.id))
  }, [dispatch, match])

  return (
    <ThemeProvider theme={theme}>
      <>
        {loading ? <Loader /> : error ? <Message severity="error" message={error} /> : (
          <Container maxWidth="lg" className={classes.root}>
            <RecipeDetailsHeader
              title={title}
              level={level}
              prepTime={prepTime}
              cookTime={cookTime}
              image={image}
            />
            <RecipeDetailsBody ingredients={ingredients} directions={directions} />
          </Container>
        )}
      </>
    </ThemeProvider>
  )
}

export default RecipeDetailsScreen