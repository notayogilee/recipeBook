import React, { useEffect, useState } from 'react'
import recipes from '../recipes'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  Typography,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core'
import { Favorite, ExpandMore } from '@material-ui/icons';

// import axios from 'axios'

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
    flexWrap: 'wrap',
    flexBasis: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5rem',
    height: 'auto',
    width: '100%',
    overflowX: 'hidden',
    background: '#FCFFDB',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(2),
      height: theme.spacing(2)
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    height: 500,
    position: 'relative'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
const HomeScreen = () => {
  const classes = useStyles()

  // const [recipes, setRecipes] = useState([])

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     const { data } = await axios.get('/api/recipes')

  //     setRecipes(data)
  //   }
  //   fetchRecipes()
  // }, [recipes])


  return (
    <>
      <ThemeProvider theme={theme}>
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
          Recipes
      </Typography>
        <Box className={classes.root}>

          {recipes.map((recipe) => (
            <Card className={classes.card} key={recipe._id} xs={12}>
              <CardHeader
                title={recipe.title}
              />
              <CardMedia
                className={classes.media}
                image={recipe.image}
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
                <IconButton>
                  <Favorite />
                </IconButton>
                <IconButton>
                  <ExpandMore
                    color="secondary"
                    fontSize="large"
                  />
                </IconButton>
              </CardActions>
            </Card>
          ))}

        </Box>
      </ThemeProvider>
    </>
  )
}

export default HomeScreen
