import React from 'react';
import SelectUserBox from './selectUserBox';
import { Redirect } from 'react-router-dom';

const overlayStyle = {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100%`,
    width: `100%`,
    backgroundColor: `#f2eff0`,

};

const loginBoxStyle= {

    justifyContent: `center`,
    alignItems: `center`,
    textAlign: `center`,
    margin: `auto`,
    width: `60vw`,
    minHeight: `270px`,
    backgroundColor: `white`,
    borderRadius: 10,
    padding: 10,
   
};

const input = {
    width: `40%`,
    height: `30px`,
    textAlign: `center`,
    margin: 5,

}

const errorField = {
    color: `red`,
}

export default class Login extends React.Component{
    state = {
        nameValue: '',
        errors:[],
        matchingUsers: [],

    }
    getMatchingUsers(value) {
        const matches = []
        for(let user in this.props.users) {
            if (user.includes(value)) {
                matches.push(this.props.users[user]);
            }
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                matchingUsers:  matches,
            };
        })
    }

    handleNameChange(value){
        const errors = this.checkForErrors(value, this.state.ageValue);

        this.setState((prevState)=>{
            return {
                ...prevState,
                nameValue: value,
                errors: errors,
            }
        })
        this.getMatchingUsers(value);
    }
    checkForErrors(nameValue, ageValue){
        const errors = [];

        if (nameValue.length < 3) {
            errors.push('Name is too short.')
        }
        if (nameValue > 20 ) {
            errors.push('Name is too long.')
        }
        return errors
    }


    handleLogin(user){
        this.props.login(user);
    }

    render(){
        if(this.props.loggedInUser){
            return (   
                <Redirect to='/home'/>
            )
        }

        return (
            
            <div style = {overlayStyle} >
                <div style ={loginBoxStyle}>
                    <h2>Login here!</h2>
                        {
                            this.state.errors.map((error)=>{
                                return <div style={errorField} key={error}>{error}</div>
                            })
                        }
                    <form>
                        <input 
                            style={input} 
                            type='text' 
                            value={this.state.nameValue} 
                            placeholder='Enter your name here'
                            onChange={(e)=> this.handleNameChange(e.target.value)}
                        /><br></br>
                    </form>

                    {   this.state.nameValue?
                            this.state.matchingUsers.map((user)=> {
                                return (
                                    <div
                                        key={user.name}
                                        onClick={(e) => this.handleLogin(user)}
                                    >
                                        <SelectUserBox
                                            user={user}
                                        />
                                    </div>
                                )
                            }):
                            null
                    }
                </div>
            </div>
        )
    }
   
}
