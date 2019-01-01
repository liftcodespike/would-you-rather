import React from 'react';
import { saveQuestion } from './../actions/questions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavBar } from './navbar';

const loginBoxStyle = {

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

const buttonStyle = {
    border: `none`,
    borderRadius: 0,
    backgroundColor: `#eb3a94`,
    padding: 14,
    fontSize: 14,
    color: `white`,
}

const input = {
    width: `40%`,
    height: `30px`,
    textAlign: `center`,
    margin: 5,

}

class NewQuestion extends React.Component{
    state = {
        optionOne: '',
        optionTwo: '',
        matchingUsers: [],

    }

    handleFormSubmit(event) {
        this.props.saveQuestion(this.props.user.id, this.state.optionOne, this.state.optionTwo);
        this.props.history.push('/home');
    }

    handleOptionChange(option, value){

        this.setState((prevState)=>{
            return {
                ...prevState,
                [option]: value,
            };
        })
    }

    render(){
        if(!this.props.user){
            return (   
                <Redirect to='/home'/>
            )
        }

        return (

            <div  >
                <NavBar 
                    user={this.props.user}
                    history={this.props.history}
                />
                <div style ={loginBoxStyle}>
                    <h2>New Question Form</h2>

                        <input 
                            style={input} 
                            type='text' 
                            value={this.state.optionOne} 
                            placeholder='Enter option one.'
                            onChange={(e)=> this.handleOptionChange('optionOne', e.target.value)}
                        /><br></br>
                        <input 
                            style={input} 
                            type='text' 
                            value={this.state.optionTwo} 
                            placeholder='Enter option two.'
                            onChange={(e)=> this.handleOptionChange('optionTwo', e.target.value)}
                        /><br></br>
                        <button 
                            style={buttonStyle}
                            onClick={(e)=>this.handleFormSubmit(e)}
                        > 
                            Add Question
                        </button>
                    

                </div>
            </div>
        )
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveQuestion: (authUser, optionOne, optionTwo) => dispatch(saveQuestion(dispatch,authUser, optionOne, optionTwo))
    }
}
export default connect (null, mapDispatchToProps)(NewQuestion);
