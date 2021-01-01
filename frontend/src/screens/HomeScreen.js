import React, { useEffect, useState } from 'react'
import recipes from '../recipes'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  Container,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
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
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FCFFDB',
    paddingBottom: '4rem',
    width: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 450,
    position: 'relative'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
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
        <Container maxWidth="lg" className={classes.root}>
          <Grid container spacing={4} style={{ justifyContent: "center", backgroundColor: "#FCFFDB" }}>
            {recipes.map((recipe) => (
              <Grid item xs={8} md={6} lg={4}>
                <Card className={classes.card} key={recipe._id} elevation={4}>
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
              </Grid>
            ))}

          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default HomeScreen
