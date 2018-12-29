import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import './App.css';

class App extends Component {
  render() {
    
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  }
}

export default connect(mapStateToProps)(App);
