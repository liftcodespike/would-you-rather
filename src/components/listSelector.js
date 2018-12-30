import React from 'react'
import { connect } from 'react-redux';
import { QuestionList } from './questionList';
import { getQuestions } from './../actions/questions';

const wrapper = {
    margin: `auto`,
    height: `60vh`,
    width: `40vw`,
    minWidth:200,
    border: `thin solid black`,
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
}

class ListSelector extends React.Component{
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
        console.log('hidsddsdsdds')
        const questions = this.props.questions
        return Object.keys(questions).map((key)=> {
            return  questions[key]
        }).sort((q1, q2) => {return q1.timestamp > q2.timestamp })
    }

    componentDidMount () {
        this.props.getQuestions();
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
        if (this.state.clicked === 'answered') {
            return (
                <div 
                    style={wrapper}
                >
                    <div
                        className='listSelector'
                        style={{...tabSelected, ...sharedTabCode}}
                        
                        onClick={()=>this.changeTab('unanswered')}
                    >
                        Answered
                    </div>
                    <div
                        className='listSelector'
                        style={{...tabUnselected, ...sharedTabCode}}
                        onClick={()=>this.changeTab('answered')}
                    >
                        Unanswered    
                    </div>
                    <QuestionList
                        questions ={ this.getOrderedQuestions().filter((question)=>{
                            console.log(question)
                            return question.optionOne.votes.length === 0 &&
                            question.optionTwo.votes.length === 0 
                        })}
                    />
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
                    onClick={()=>this.changeTab('unanswered')}
                >
                    Answered
                </div>
                <div
                    className='listSelector'
                    style={{...tabSelected, ...sharedTabCode}}
                    onClick={()=>this.changeTab('answered')}
                >
                    Unanswered
                </div>

            </div>
        )  
    }
};

const mapStateToProps = ({questions}) => {
    return {
        questions: questions.questions,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions:()=> {dispatch(getQuestions(dispatch))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSelector)
