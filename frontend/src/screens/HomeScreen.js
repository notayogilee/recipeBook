import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRecipes } from '../actions/recipeActions'
import { Link, Redirect } from 'react-router-dom'
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
// import MoreVertIcon from '@material-ui/icons/MoreVert';
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
    justifyContent: 'center',
    alignItems: 'center',
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
          {/* <IconButton>
            <MoreVert
              color="secondary"
              fontSize="large" />
          </IconButton> */}
          {/* <Typography
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
      </Typography> */}
          {loading
            ? <Loader />
            : error
              ? <Message severity="error" message={error} />
              : <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={4} style={{ justifyContent: "center", backgroundColor: "#FCFFDB" }}>
                  {recipes.map((recipe) => (
                    <Grid item xs={8} md={6} lg={4} key={recipe._id}>
                      <Card className={classes.card} elevation={4}>
                        <CardHeader
                          title={recipe.title}
                        />
                        <CardMedia
                          className={classes.media}
                          component="img"
                          src={recipe.image}
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
                          <Link to={`/recipe/${recipe._id}`}>
                            <IconButton>
                              <ExpandMore
                                color="secondary"
                                fontSize="large"
                              />
                            </IconButton>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
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
