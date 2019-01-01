import React from 'react'
import { Redirect } from "react-router-dom";
import { NavBar } from './navbar';
import ListSelector from './listSelector';


export default class LeaderBoard extends React.Component{
    getOrderedList(users){
        console.log(users)
        const orderedArr = Object.values(users).sort((user1, user2)=>{
            const userOneAnswers = Object.values(user1.answers).length
            console.log(userOneAnswers)
            return;
        })
        console.log(orderedArr,'22929299');
        return 'hi'
    }
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
                {this.getOrderedList(this.props.users)}
            </div>
        )
    }
};


