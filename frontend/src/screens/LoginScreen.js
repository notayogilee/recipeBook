import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
  Zoom
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import Message from '../components/Message'
import Loader from '../components/Loader'

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
    color: '#8d6e63'
  }
}))

const LoginScreen = ({ location, history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split("=")[1] : "/recipes"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Zoom in={!loggedIn}>
          <Zoom in={loggedIn}>
            <Container maxWidth="md" className={classes.root} >

              {error && <Message severity="error" message={error} />}
              {loading ? <Loader /> : (
                <>
                  <Link to="/" className={classes.link}>
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
                  </Link>

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
                      Don't have an account? <Link className={classes.link} to="/register"><strong>Register</strong></Link>
                    </Typography>
                  </Paper>
                </>
              )}

            </Container>
          </Zoom>
        </Zoom>
      </ThemeProvider>
    </>
  )
}

export default LoginScreen
