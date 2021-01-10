import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Slide
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import Message from '../components/Message'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffab40' },
    secondary: { main: '#8d6e63' },
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFFDB',
    height: '100vh'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  input: {
    marginBottom: 16,
    width: '100%'
  },
  link: {
    textDecoration: 'none',
    color: '#8d6e63',
    cursor: 'pointer'
  }
}))

const LoginScreen = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showRegister, setShowRegister] = useState(false)
  const [showLanding, setShowLanding] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleRegister = () => {
    setShowLogin(false)
    return setTimeout(() => {
      setShowRegister(true)
    }, 50)
  }

  const handleLanding = () => {
    setShowLogin(false)
    return setTimeout(() => {
      setShowLanding(true)
    }, 100)
  }

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push("/recipes")
    }
    if (showRegister) {
      history.push("/register")
    }
    if (showLanding) {
      history.push("/")
    }
  }, [history, userInfo, showRegister, showLanding])

  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" className={classes.root} >
          {error && <Message severity="error" message={error} />}
          <>
            <div onClick={handleLanding} className={classes.link}>
              <Slide in={showLogin} direction="left">
                <Typography
                  component="header"
                  variant="h2"
                  color="primary"
                  style={{
                    fontFamily: 'Righteous',
                    margin: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Recipe Book
           </Typography>
              </Slide>
            </div>
            <Slide in={showLogin} direction="right">
              <Paper className={classes.paper} elevation={3}>
                <form
                  className={classes.paper}
                  autoComplete="off"
                  onSubmit={submitHandler}
                >
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.input}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    className={classes.input}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  <Button
                    type="submit"
                    variant='contained'
                    color='secondary'
                    style={{ marginTop: "16px" }}
                  >
                    Login
              </Button>
                </form>
                <Typography variant="subtitle1">
                  Don't have an account? <Button onClick={handleRegister} className={classes.link}><strong>Register</strong></Button>
                </Typography>
              </Paper>
            </Slide>
          </>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default LoginScreen
