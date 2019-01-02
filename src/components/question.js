import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavBar } from './navbar';
import { saveQuestionAnswer } from './../actions/questions';


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
const seperator = {
    borderTop: `thin solid #eb3a94`,
    width: `100%`,
    height: `20%`,
    margin: 15,
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

const progressbarWrapper =  {
    backgroundColor: `#303030`,
    borderRadius: `13px`,
    padding: 3,
  }
  
  const progressbarInner =(percentage)=> ({
    backgroundColor: `#74e3a5   `,
    width: `${percentage}%`,
    height: `20px`,
    borderRadius: `10px`,
    textAlign:'center',
    color: `white`,
    padding: `auto`,
  })

class Question extends React.Component{
    votedStr=`You voted for the above option.`
    state =  {
        user: this.props.user
    }

    getPercentageIfAnswered(totalVotes, countForThisOption) {
        const percentage =  this.getPercentage(totalVotes, countForThisOption);
        console.log(percentage)
        if (this.checkIfAnswered()){
            return(
                <div style={progressbarWrapper}>
                    <div style={progressbarInner(isNaN(percentage)?0:percentage)}>{isNaN(percentage)?`loading...`:`%${percentage}`}</div>
                </div>
            )
        }

        return null;
    }

    getVotedTxtOrVoteBTN (optionNum){
        if (this.checkIfAnswered()) {
            if(this.state.user.answers[this.props.question.id]=== optionNum){
                return <p style={voteStyle}><sup>*</sup>{this.votedStr}</p>
            }
            return;
        }
        return (<button 
                    style={btnStyle}
                    onClick={()=>this.handleUpdate(optionNum)}
                >
                    Click To vote for the above option.
                </button>
                )
    }

    handleUpdate(optionNum){
        this.props.saveQuestionAnswer(this.state.user.id, this.props.question.id, optionNum)
        this.setState((prevState)=>{
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    answers: {
                        ...prevState.user.answers,
                        [this.props.question.id]: optionNum,
                    }
                }
            }

        })
    }

    checkIfAnswered(){
        return this.state.user.answers.hasOwnProperty(this.props.question.id);
    }

    getPercentage(totalVotes, countForThisOption){
        console.log(countForThisOption/totalVotes)
        return ((countForThisOption/totalVotes) * 100).toFixed(2)
    }

    setProfileLayout(){
        const questionCreator = this.props.users[this.props.question.author]
        const totalVotes = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                    history={this.props.history}
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
                        <h2>Would You Rather...</h2>
                        </div>
                        <p>{this.props.question.optionOne.text}</p>
                        <p>
                            <b>Voted By: </b>
                            {this.props.question.optionOne.votes.length} of {totalVotes}
                        </p>
                            {this.getPercentageIfAnswered(totalVotes,this.props.question.optionOne.votes.length)}
                        
                        {this.getVotedTxtOrVoteBTN('optionOne')}
                        <div style={seperator}></div>
                        <p>{this.props.question.optionTwo.text}</p>
                        <p>
                            <b>Voted By: </b> 
                            {this.props.question.optionTwo.votes.length} of {totalVotes}
                        </p>
                            {this.getPercentageIfAnswered(totalVotes, this.props.question.optionTwo.votes.length)}
                        
                        {this.getVotedTxtOrVoteBTN('optionTwo')}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (!this.props.user) {

            return (   
                <Redirect   to={{
                    pathname: "/",
                    state: { referrer: `/question/${this.props.qid}` }
                  }}/>
            )
        }
        if (!this.props.question) {
            return (   
                <Redirect   to={{
                    pathname: "/nomatch",
                    state: { referrer: `/question/${this.props.qid}` }
                  }}/>
            )

        }
        return this.setProfileLayout();
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        saveQuestionAnswer: (authedUser, qid, answer)=> { dispatch(saveQuestionAnswer(dispatch, authedUser, qid, answer)) }
    }

}

export default connect(null, mapDispatchToProps)(Question)