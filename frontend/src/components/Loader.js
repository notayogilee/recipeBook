import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%"

  },
  spinner: {
    margin: "auto",
    display: "block",
    color: "#8d6e63"
  }
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress size="100px" className={classes.spinner} />
    </div>
  )
}

export default Loader
