import React, { useEffect, useState } from 'react'
import recipes from '../recipes'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  Typography,
  Container,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

// import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexBasis: '33.333%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100vw',
    overflowX: 'hidden',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing("30%"),
      height: theme.spacing("30%")
    }
  },
  card: {
    width: '30%',
    height: 400
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
      <Container maxWidth='lg' className={classes.root}>
        {recipes.map((recipe) => (
          <Card className={classes.card} >
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
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default HomeScreen