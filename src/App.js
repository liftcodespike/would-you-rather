import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { Login } from './components/login'
import './App.css';

class App extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <div>s</div>
    }else{
      return <Login/>
    }
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
}

export default connect(mapStateToProps)(App);
