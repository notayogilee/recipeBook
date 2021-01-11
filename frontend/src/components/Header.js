import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Container,
  Box,
  Fade,
  Slide,
  Zoom
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import { MoreTwoTone, CloseTwoTone } from '@material-ui/icons'

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
    justifyContent: "start",
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
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState(true)

  const userLogin = useSelector(state => state.userLogin)
  const userRegister = useSelector(state => state.userRegister)

  // Initialize userInfo
  let userInfo;

  if (!userRegister.userInfo) {
    userInfo = userLogin.userInfo
  } else {
    userInfo = userRegister.userInfo
  }

  const handleOpen = () => {
    setClose(false)
    setTimeout(() => {
      setOpen(true)
    }, 1000)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      setClose(true)
    }, 100)
    setClose(true)
  }


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" >
        {open &&
          <Slide direction="left" in={open}>
            <Box className={classes.root}>
              <IconButton
                onClick={handleClose}
              >
                <CloseTwoTone
                  color="primary"
                  fontSize="large"
                />
              </IconButton>

            </Box>
          </Slide>
        }
        {close &&
          <Slide direction="right" in={close}>
            <Box className={classes.root}>
              <IconButton
                onClick={handleOpen}
              >
                <MoreTwoTone
                  color="primary"
                  fontSize="large"
                  style={{
                    transform: "rotate(180deg)"
                  }}
                />
              </IconButton>
              {userInfo &&
                <Typography
                  color="secondary"
                  style={{
                    fontSize: "30px",

                  }}
                >
                  Welcome {userInfo.user.firstName} {userInfo.user.lastName}
                </Typography>
              }
            </Box>
          </Slide>
        }
      </Container>
    </ThemeProvider>
  );
}

export default Header