import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { listRecipeDetails } from '../actions/recipeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import RecipeDetailsHeader from '../components/RecipeDetailsHeader'
import RecipeDetailsBody from '../components/RecipeDetailsBody'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.tertiary.main,
    paddingBottom: '4rem',
    width: '100%',
    minHeight: '100vh'
  },
}))

const RecipeDetailsScreen = ({ match, history }) => {

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
  const theme = useTheme()

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