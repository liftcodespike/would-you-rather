import React from 'react'
import { QuestionList } from './questionList';

const wrapper = {
    margin: `auto`,
    width: `40vw`,
    minWidth:200,
    border: `none`,
    textAlign: `center`,
    marginTop:'3vh',
    borderRadius: 8,
}

const tabUnselected = {
    backgroundColor: `#303030`,
    color:'white'
}

const tabSelected = {
    color:'black',
    backgroundColor: `#eaeaea`,
}

const sharedTabCode = {
    margin: `auto`,
    height: `8vh`,
    minHeight: 20,
    width: `14vw`,
    minWidth: 90,
    border: `thin solid black`,
    borderBottom: 'none',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 0,
}
const questionListWrapper = {
    backgroundColor: `#303030`,
    height: `150%`,
    padding: 5,
}

export default class ListSelector extends React.Component{

    state= { 
        clicked: 'unanswered',
        questions: null,
    }
    changeTab(status){
        this.setState((prevState)=>{
            return {
                ...prevState,
                clicked: status,
            }
        })
    }
    getOrderedQuestions(){
        const questions = this.props.questions
        return Object.keys(questions).map((key)=> {
            return  questions[key]
        }).sort((q1, q2) => {return q2.timestamp - q1.timestamp })
    }

    render() {
        if(!this.props.questions){
            return (
                <img
                    style={{margin: `auto`}}
                    alt='loading'
                    src='/img/loading.gif'
                    height='60'
                ></img>
            )
        }
        if (this.state.clicked === 'unanswered') {
            return (
                <div 
                    style={wrapper}
                >
                    <div
                        className='listSelector'
                        style={{...tabSelected, ...sharedTabCode}}
                        
                        onClick={()=>this.changeTab('answered')}
                    >
                        Answered
                    </div>
                    <div
                        className='listSelector'
                        style={{...tabUnselected, ...sharedTabCode}}
                        onClick={()=>this.changeTab('unanswered')}
                    >
                        Unanswered    
                    </div>
                    <div style={questionListWrapper}>
                        <QuestionList
                            users={this.props.users}
                            questions ={ this.getOrderedQuestions().filter((question)=>{
                                return !this.props.user.answers.hasOwnProperty(question.id)
                            })}
                        />
                    </div>
                </div>
            )
        }

        return (
            <div 
                style={wrapper}
            >
                <div
                    className='listSelector'
                    style={{...tabUnselected,...sharedTabCode}}
                    onClick={()=>this.changeTab('answered')}
                >
                    Answered
                </div>
                <div
                    className='listSelector'
                    style={{...tabSelected, ...sharedTabCode}}
                    onClick={()=>this.changeTab('unanswered')}
                >
                    Unanswered
                </div>
                <div style={questionListWrapper}>
                    <QuestionList
                        users={this.props.users}
                        questions ={ this.getOrderedQuestions().filter((question)=>{
                            return this.props.user.answers.hasOwnProperty(question.id)
                        })}
                    />
                </div>

            </div>
        )  
    }
};

