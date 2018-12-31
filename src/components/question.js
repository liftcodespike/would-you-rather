import React from 'react';
import { NavBar } from './navbar';

const questionWrapper = {
    height: `300px`,
    width: `70vw`,
    minWidth: 420,
    margin: `auto`,
    marginTop: `10px`,
    border: `thin solid black`,
}

const imageWrapper = {
    display: `inline-block`,
    height: `280px`,
    verticalAlign: `top`,
    width: `20%`,
    border: `thin solid black`,
    padding: 10,
}
const resultsWrapper = {
    display: `inline-block`,
    height: `100%`,
    width: `60%`,
    padding: 10,
    fontSize: `17px`,
}

export class Question extends React.Component{

    state = {

        answered: this.checkIfAnswered(),
    }

    checkIfAnswered(){
        console.log(this.props.user.answers.hasOwnProperty(this.props.question.id) );
    }

    answered(){
        const questionCreator = this.props.users[this.props.question.author]
        const totalVotes = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                />
                <div 
                    style={questionWrapper}
                >
                    <div style={imageWrapper}>
                        <img
                            alt='user'
                            src={`/avatars/${questionCreator.avatarURL}.svg`}
                        />
                        <p><b>Asked by: {questionCreator.name}</b></p>
                    </div>
                    <div style={resultsWrapper} >
                        
                        <h1>Results</h1>
                        <p>{this.props.question.optionOne.text}</p>
                        <p><b>Voted By:</b> {this.props.question.optionOne.votes.length} of {totalVotes}</p>
                        <p>{this.props.question.optionTwo.text}</p>
                        <p><b>Voted By:</b> {this.props.question.optionTwo.votes.length} of {totalVotes}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.answered();
    }
}