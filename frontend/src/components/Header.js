import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Collapse,
  Fade,
  Slide,
  Zoom
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
    },
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    height: "100px",
    width: "100%"
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100px",
    width: "100%",
    backgroundColor: '#ffab40',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleChange = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Slide direction="left" in={!open}>
          <IconButton onClick={handleChange} color="inherit" aria-label="menu">
            <MenuIcon fontSize="large" />
          </IconButton>
        </Slide>
        <Collapse in={open}>
          <Container className={classes.buttons} >
            <IconButton onClick={handleChange} color="inherit" aria-label="menu">
              <CloseIcon onClick={handleChange} fontSize="large" />
            </IconButton>
            <Link to="/register" className={classes.link}>
              <Button size="large" variant="contained" color="secondary"  >
                Register
            </Button>
            </Link>
            <Link to="/login" className={classes.link}>
              <Button size="large" variant="contained" color="secondary" >
                Login
            </Button>
            </Link>
          </Container>
        </Collapse>
      </Container>
    </ThemeProvider>
  );
}

export default Header