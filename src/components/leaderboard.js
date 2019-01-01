import React from 'react'
import { Redirect } from "react-router-dom";
import { NavBar } from './navbar';

const questionWrapper = {
    padding:5,
    minHeight: `300px`,
    width: `70vw`,
    minWidth: 420,
    margin: `auto`,
    marginTop: `10px`,
    border: `thin solid black`,
    borderRadius: 8,
}

const imageWrapper = {
    display: `inline-block`,
    minHeight: `280px`,
    verticalAlign: `top`,
    width: `25%`,
    border: `none`,
    borderRadius: 8,
    padding: 10,
}
const resultsWrapper = {
    display: `inline-block`,
    height: `100%`,
    width: `60%`,
    padding: 10,
    fontSize: `17px`,
}
const cardHeader={
    borderBottom: 'thin solid #eb3a94'
}

export default class LeaderBoard extends React.Component{
    getOrderedList(users){

        const arr = Object.values(users)
        const orderedArr = arr.sort((u1,u2)=>{
            const u1AnswerCount = Object.values(u1.answers).length;
            const u1QuestionCount = u1.questions.length;
            const u2AnswerCount = Object.values(u2.answers).length;
            const u2QuestionCount = u2.questions.length;

            return (u2AnswerCount+ u2QuestionCount)-(u1AnswerCount+ u1QuestionCount);
        })
        return orderedArr;
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
                <h1>Leaderboard</h1>
                {this.getOrderedList(this.props.users).map((user=>{
                    return (
                        <div 
                            style={questionWrapper}
                            key={user.id}
                        >
                            <div style={imageWrapper}>
                                <img
                                    alt='user'
                                    src={`/avatars/${user.avatarURL}.svg`}
                                />
                            </div>
                            <div style={resultsWrapper} >
                                <div style={cardHeader}> 
                                    <h2>{user.name}</h2>
                                </div>
                                <p>
                                    <b>Number of questions answered: </b>
                                    {Object.values(user.answers).length}
                                </p>
                                <p>
                                <b>Number of questions asked: </b>
                                    {user.questions.length}
                                </p>
                            </div>
                        </div>
                        
                    )          
                }))}
            </div>
        )
    }
};


