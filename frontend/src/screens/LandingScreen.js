import React from 'react'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Hidden,
  Button,
  Paper
} from '@material-ui/core'
import image from '../images/landing.jpg'

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
    justifyContent: 'center',
    height: '100vh',
    background: '#FCFFDB',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  link: {
    textDecoration: 'none'
  }
}))

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" className={classes.root}>
          <Container className={classes.buttons}>
            <Typography
              component="header"
              variant="h1"
              color="primary"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                fontFamily: 'Righteous'
              }}
            >
              Recipe Book
              </Typography>
          </Container>

          <Hidden smDown>
            <Paper
              elevation={5}
              component="div"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '50%',
                overflow: 'hidden'
              }}
            />
          </Hidden>
          <Hidden xsDown>
            <Paper
              elevation={4}
              component="div"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                background: '#ffab40'
              }}
            >
              <Typography variant="h1" color="secondary" style={{ fontFamily: 'Righteous' }}>
                Share
              </Typography>
              <Typography variant="h1" color="secondary" style={{ fontFamily: 'Righteous' }}>
                Some
              </Typography>
              <Typography variant="h1" color="secondary" style={{ fontFamily: 'Righteous' }}>
                Magic
              </Typography>

            </Paper>
          </Hidden>

          <Container className={classes.buttons} >
            <Link to="/register" className={classes.link}>
              <Button size="large" variant="contained" color="secondary"  >
                Register
            </Button>
            </Link>
            <Link to="/login" className={classes.link}>
              <Button size="large" variant="contained" color="secondary" >
                Login
            </Button>
            </Link>
          </Container>

        </Container>
      </ThemeProvider>
    </>
  )
}

export default Landing