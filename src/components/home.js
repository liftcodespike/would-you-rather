import React from 'react'
import { Redirect } from "react-router-dom";
import { NavBar } from './navbar';
import ListSelector from './listSelector';


export default class Home extends React.Component{

    render(){
        if(!this.props.user){
            return (   
                <Redirect to='/'/>
            )
        }
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                    history={this.props.history}
                />
                <ListSelector
                    users={this.props.users}
                    user={this.props.user}
                    questions = {this.props.questions}
                />
            </div>
        )
    }
};


