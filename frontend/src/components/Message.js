import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, IconButton, Container } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}))

const Message = ({ severity, message }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <Close />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </Container>
  )
}

Message.defaultProps = {
  severity: "error"
}

export default Message
