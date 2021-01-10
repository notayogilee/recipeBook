import React, { useState, useEffect } from 'react'
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
  Paper,
  Slide,
  Grow,
  Fade
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

const Landing = ({ history }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(true)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  const handleLogin = () => {
    setOpen(false)
    return setTimeout(() => {
      setLogin(true)
    }, 100)
  }

  const handleRegister = () => {
    setOpen(false)
    return setTimeout(() => {
      setRegister(true)
    }, 100)
  }

  useEffect(() => {
    if (login) {
      history.push("/login")
    }
    if (register) {
      history.push("/register")
    }
  }, [login, register, history])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" className={classes.root}>
          <Container className={classes.buttons}>
            <Slide in={open} direction="left" timeout={500}>
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
            </Slide>
          </Container>

          <Hidden smDown>
            <Slide in={open} direction="down">
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
            </Slide>
          </Hidden>
          <Hidden xsDown>
            <Slide in={open} direction="up">
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
                <Fade in={open} timeout={1500}>
                  <Typography variant="h1" color="secondary" style={{ fontFamily: 'Righteous' }}>
                    Share
              </Typography>
                </Fade>
                <Fade in={open} timeout={2000}>
                  <Typography variant="h1" color="secondary" style={{ fontFamily: 'Righteous' }}>
                    Some
              </Typography>
                </Fade>
                <Fade in={open} timeout={2500}>
                  <Typography variant="h1" color="secondary" style={{ fontFamily: 'Righteous' }}>
                    Magic
              </Typography>
                </Fade>
              </Paper>
            </Slide>
          </Hidden>

          <Container className={classes.buttons} >
            <Grow in={open} timeout={700}>
              <Button onClick={handleRegister} size="large" variant="contained" color="secondary"  >
                Register
            </Button>
            </Grow>
            <Grow in={open} timeout={1200}>
              <Button onClick={handleLogin} size="large" variant="contained" color="secondary" >
                Login
            </Button>
            </Grow>
          </Container>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Landing