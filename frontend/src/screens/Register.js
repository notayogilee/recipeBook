import React from 'react'
import { Container } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFFDB',
    height: '100vh',
    width: '60%'
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
    marginBottom: 16
  }
})

const Register = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.root} >
        <Paper className={classes.paper}>
          <form className={classes.paper} autoComplete="off">
            <TextField id="standard-basic" label="First Name" className={classes.input} />
            <TextField id="standard-basic" label="Last Name" className={classes.input} />
            <TextField id="standard-basic" label="Email" className={classes.input} />
            <TextField id="standard-basic" label="Password" className={classes.input} />
            <TextField id="standard-basic" label="Confirm Password" className={classes.input} />
          </form>
        </Paper>
      </Container>

    </>
  )
}

export default Register
