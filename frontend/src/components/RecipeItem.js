import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core'
import { Favorite, ExpandMore } from '@material-ui/icons';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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

const RecipeItem = ({ recipe }) => {
  const classes = useStyles()
  return (
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
  )
}

export default RecipeItem
