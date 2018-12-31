import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { Question }from './components/question';
import { getUsers, login } from './actions/login';
import { getQuestions } from './actions/questions';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.getUsers();
    this.props.getQuestions();
  }   

  render() {

    if(this.props.users && this.props.questions){

      return(
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={()=>
              (
                <Login
                  users={this.props.users}
                  login={this.props.login}
                  loggedInUser={this.props.loggedInUser}
                />
              )
            }/>
            <Route exact path='/question/:id' render={(props)=>(
              <Question
                users={this.props.users}
                question={this.props.questions[props.match.params.id]}
                user={this.props.user}
              />
            )}/>
            <Route exact path='/home' render={()=>(
              <Home 
                users={this.props.users}
                user={this.props.user}
                questions={this.props.questions}
              />
            )}/>
          </Switch>
        </BrowserRouter>
      )
    }
    return(
      <img
         alt='loading'
         src='/img/loading.gif'
         height='60'
      ></img>
    )
 
  }
}
const mapStateToProps =( {login, questions} )=> {
  return {
      users: login.users,
      loggedInUser: login.loggedInUser,
      questions: questions.questions,
      user: login.loggedInUser,
  }; 
};

const mapDispatchToProps = (dispatch )=> {
  return {
      getUsers:()=> { dispatch(getUsers(dispatch)) },
      login: (user)=> { dispatch(login(user))},
      getQuestions:()=> {dispatch(getQuestions(dispatch))},
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
