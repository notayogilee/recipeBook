import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

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

const LoginScreen = () => {
  const classes = useStyles();
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
            <form className={classes.paper} autoComplete="off">
              <TextField id="standard-basic" label="Email" className={classes.input} />
              <TextField id="standard-basic" label="Password" className={classes.input} />
              <Button variant='contained' color='secondary' style={{ marginTop: "16px" }}>Login</Button>
            </form>
            <Typography variant="subtitle">
              Don't have an account? <Link className={classes.link} to="/register"><strong>Register</strong></Link>
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default LoginScreen
