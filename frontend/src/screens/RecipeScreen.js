import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Button,
  Container
} from '@material-ui/core'

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
    alignItems: 'center',
    background: '#FCFFDB',
    paddingBottom: '4rem',
    width: '100%',
    minHeight: '100vh'
  },
}))


const RecipeScreen = ({ match }) => {
  const classes = useStyles()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await axios.get(`/api/recipes/${match.params.id}`)

      setRecipe(data)
    }
    fetchRecipe()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
        <Container className={classes.root}>
          <Link
            to="/recipes"
            style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
            >
              Back
    </Button>
          </Link>

          {recipe.title}
        </Container>
      </>
    </ThemeProvider>

  )
}

export default RecipeScreen
