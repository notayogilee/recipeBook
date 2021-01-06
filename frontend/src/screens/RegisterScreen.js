import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  Input
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
    color: '#8d6e63'
  }
}))

const Register = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    } else {
      setMessage('Cool')
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" className={classes.root} >
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
              Already registered? <Link className={classes.link} to="/login"><strong>Login</strong></Link>
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Register
