import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  spinner: {
    width: "100px",
    height: "100px",
    margin: "auto",
    display: "block",
    color: "#8d6e63"
  }
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} />
    </div>
  )
}

export default Loader
