import React from 'react';
import { Link } from 'react-router-dom';

const questionWrapper = {
    border: 'thin solid black',
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: `white`,
}

const imgStyle= {
    height: `4vw`,
}
const buttonStyle = {
    border: `none`,
    padding: 8,
    margin: 5,
    backgroundColor: `#88cb00`,
    color: `white`,
}

export class QuestionList extends React.Component{
    
    render(){

        return (

            <div>
                {this.props.questions.map((question)=>{
                    let user =this.props.users[question.author];

                    return (
                        <div
                            to={`/question/${question.id}`} 
                            style={questionWrapper}
                            key={question.id}
                        >
                            <img
                                alt='question author id'
                                src={`/avatars/${user.avatarURL}.svg`}
                                style={imgStyle}
                            />
                            <p><b>{user.name} asks:</b>  Would you rather {question.optionOne.text}...</p>
                            <Link 
                                to={`/question/${question.id}`}
                            >
                                <button
                                    style={buttonStyle}
                                >
                                    View Question
                                </button>
                            </Link>
                        </div>
                    )
                })}

            </div>
        )
    }
}