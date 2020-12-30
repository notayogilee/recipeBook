import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Recipe Book
          </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>

  );
}

export default Navbar


// import React from 'react'
// import Button from '@material-ui/core/Button'
// import { createMuiTheme } from '@material-ui/core/styles'

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#ffdd71',
//       main: '#ffab40',
//       dark: '#c77c02',
//       contrastText: '#000',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#8d6e63',
//       dark: '#5f4339',
//       contrastText: '#fff',
//     },
//   }
// })

// const Header = () => {
//   return (
//     <header>
//       <Button variant="contained" color="secondary">
//         Header
//      </Button>
//     </header>
//   )
// }

// export default Header
