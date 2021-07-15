import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import PublicRecipesScreen from './screens/PublicRecipesScreen'
import RecipeScreen from './screens/RecipeScreen'
import MyRecipesScreen from './screens/MyRecipesScreen'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/recipes" component={PublicRecipesScreen} />
        <Route path="/recipe/:id" component={RecipeScreen} />
        <Route path="/myRecipes" component={MyRecipesScreen} />
      </Switch>
    </Router>
  );
}

export default App;
