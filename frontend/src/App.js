import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import RecipeScreen from './screens/RecipeScreen'

const App = () => {

  return (
    <Router>
      <>
        <Route exact path="/" component={LandingScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/recipes" component={HomeScreen} />
        <Route path="/recipe/:id" component={RecipeScreen} />
      </>
    </Router>
  );
}

export default App;
