import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './screens/Landing'
import Login from './screens/Login'
import Register from './screens/Register'

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </>
    </Router>
  );
}

export default App;
