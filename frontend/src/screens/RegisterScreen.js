import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Container,
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  Slide
} from '@material-ui/core'

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

const RegisterScreen = ({ history }) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [showRegister, setShowRegister] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showLanding, setShowLanding] = useState(false)

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const userLogin = useSelector(state => state.userLogin)

  // useMemo for conditional userInfo as dependancy in useEffect
  let userInfo = useMemo(() => { }, [])

  // looking for userInfo in localstorage, 
  // starts in userRegister then is set as initial state
  // in userLogin in store.js of redux
  if (!userRegister.userInfo) {
    userInfo = userLogin.userInfo
  }
  userInfo = userRegister.userInfo
  const { loading, error } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push("/recipes")
    }
    if (showLogin) {
      history.push("/login")
    }
    if (showLanding) {
      history.push("/")
    }
  }, [history, userInfo, showLogin, showLanding])

  const handleLogin = () => {
    setShowRegister(false)
    setTimeout(() => {
      return setShowLogin(true)
    }, 50)
  }

  const handleLanding = () => {
    setShowRegister(false)
    return setTimeout(() => {
      setShowLanding(true)
    }, 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    } else {
      dispatch(register(firstName, lastName, email, password))
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" className={classes.root} >
          {error && <Message severity="error" message={error} />}
          <Slide in={showRegister} direction="right">
            <div onClick={handleLanding} className={classes.link}>
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
            </div>
          </Slide>
          <Slide in={showRegister} direction="left">
            <Paper className={classes.paper} elevation={3}>
              <Typography>{message}</Typography>
              <form className={classes.paper} autoComplete="off">
                <FormControl>
                  <InputLabel htmlFor="component-simple">First Name</InputLabel>
                  <Input id="component-simple" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                  <Input id="component-simple" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="component-simple">Email</InputLabel>
                  <Input id="component-simple" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="component-simple">Confirm Password</InputLabel>
                  <Input id="component-simple" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </FormControl>
                <Button onClick={handleSubmit} variant='contained' color='secondary' style={{ marginTop: "16px" }}>Register</Button>
              </form>
              <Typography variant="subtitle1">
                Already registered? <Button className={classes.link} onClick={handleLogin}><strong>Login</strong></Button>
              </Typography>
            </Paper>
          </Slide>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default RegisterScreen
