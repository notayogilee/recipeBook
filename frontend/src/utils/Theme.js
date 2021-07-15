import { createMuiTheme } from '@material-ui/core/styles'

const recipeBookOrange = "#ffab40"
const recipeBookBrown = "#8d6e63"
const recipeBookBiege = "#FCFFDB"

export default createMuiTheme({
  palette: {
    common: {
      orange: `${recipeBookOrange}`,
      brown: `${recipeBookBrown}`,
      biege: `${recipeBookBiege}`
    },
    primary: {
      main: `${recipeBookOrange}`
    },
    secondary: {
      main: `${recipeBookBrown}`
    },
    tertiary: {
      main: `${recipeBookBiege}`
    }
  },
  typography: {

  }
})