import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Container,
  Box,
} from '@material-ui/core'


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
    justifyContent: "space-between",
    alignItems: "center",
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

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const userRegister = useSelector(state => state.userRegister)

  // Initialize userInfo
  let userInfo;

  if (!userRegister.userInfo) {
    userInfo = userLogin.userInfo
  } else {
    userInfo = userRegister.userInfo
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" >
        <Box className={classes.root}>
          {userInfo &&
            <>
              <Typography
                color="secondary"
                style={{
                  fontSize: "30px",
                }}
              >
                Welcome {userInfo.user.firstName} {userInfo.user.lastName}
              </Typography>

              <Box>
                <Link to="/myRecipes">
                  <Button>My Recipes</Button>
                </Link>
                <Link to="/">
                  <Button onClick={handleLogout}>Logout</Button>
                </Link>
              </Box>
            </>
          }
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Header