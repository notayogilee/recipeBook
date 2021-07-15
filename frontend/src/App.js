import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './utils/Theme'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import PublicRecipesScreen from './screens/PublicRecipesScreen'
import RecipeDetailsScreen from './screens/RecipeDetailsScreen'
import MyRecipesScreen from './screens/MyRecipesScreen'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/recipes" component={PublicRecipesScreen} />
          <Route path="/recipe/:id" component={RecipeDetailsScreen} />
          <Route path="/myRecipes" component={MyRecipesScreen} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
