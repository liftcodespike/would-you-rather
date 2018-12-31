import React from 'react';
import { Redirect } from 'react-router-dom';
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
    boxShadow: `5px 10px #888888`,
}
const btnStyle = {
    borderRadius: 0,
    border: `none`,
    backgroundColor: `#eb3a94`,
    color: `white`,
    padding: 8,
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
const voteStyle= {
    color: '#eb3a94'
}

export class Question extends React.Component{
    votedStr=`You voted for the above option.`

    getVotedTxtOrVoteBTN (optionNum){
        if (this.checkIfAnswered()) {
            if(this.props.user.answers[this.props.question.id]=== optionNum){
                return <p style={voteStyle}><sup>*</sup>{this.votedStr}</p>
            }
            return;
        }
        return <button style={btnStyle}>Click To vote for the above option.</button>
    }

    checkIfAnswered(){
        return this.props.user.answers.hasOwnProperty(this.props.question.id);
    }

    setProfileLayout(){
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
                        <div style={cardHeader}> 
                            <h1>Results</h1>
                        </div>
                        <p><i>{this.props.question.optionOne.text}</i></p>
                        <p>
                            <b>Voted By: </b>
                            {this.props.question.optionOne.votes.length} of {totalVotes} 
                        </p>
                        {this.getVotedTxtOrVoteBTN('optionOne')}
                        <p><i>{this.props.question.optionTwo.text}</i></p>
                        <p>
                            <b>Voted By:</b> 
                            {this.props.question.optionTwo.votes.length} of {totalVotes} 
                        </p>
                        {this.getVotedTxtOrVoteBTN('optionTwo')}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if(!this.props.user){
            return <Redirect to='/' />
        }
        return this.setProfileLayout();
    }
}