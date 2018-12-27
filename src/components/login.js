import React from 'react';

const overlayStyle = {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100%`,
    width: `100%`,
    backgroundColor: `black`,
    opacity: 0.8,

};

const loginBoxStyle= {

    justifyContent: `center`,
    alignItems: `center`,
    textAlign: `center`,
    margin: `auto`,
    height: `40vh`,
    width: `60vw`,
    minHeight: `270px`,
    backgroundColor: `white`,
    borderRadius: 10,
    textAlign: `center`,
    padding: 10,
   
};

const input = {
    width: `40%`,
    height: `30px`,
    textAlign: `center`,
    margin: 5,

}

const buttonStyle = {
    border: `thin solid black`,
    height: `30px`,
    margin: 5,
}

const errorField = {
    color: `red`,
}

export class Login extends React.Component{
    state = {
        nameValue: '',
        ageValue: '',
        errors:[],

    }

    handleNameChange(value){
        const errors = []
        if (value.length < 3) {
            errors.push('Name is too short.')
        }
        if (value > 20) {
            errors.push('Name is too long.')
        }
        this.setState((prevState)=>{
            console.log(value)
            return {
                ...prevState,
                nameValue: value,
                errors: errors,
            }
        })
    }

    handleAgeChange(value){
        const reg = new RegExp('^\\d+$');
        const errors = []
        if (!reg.test(value)) {
            errors.push('The age entered is not a valid number.')
        }

        this.setState((prevState)=>{
            console.log(value)
            return {
                ...prevState,
                ageValue: value,
                errors: errors,
            }
        })
    }

    render(){
        return (
            <div style = {overlayStyle} >
                <div style ={loginBoxStyle}>
                    <h2>Login here to use this site.</h2>
                        {
                            this.state.errors.map((error)=>{
                                return <div style={ errorField} key={error}>{error}</div>
                            })
                        }
                    <form>
                        <input 
                            style={input} 
                            type='text' 
                            value={this.state.nameValue} 
                            placeholder='Enter your name here'
                            onChange={(e)=> this.handleNameChange(e.target.value)}
                        /><br></br>
                        <input 
                            style={input} 
                            type='number' 
                            value={this.state.ageValue} 
                            placeholder='Enter your age here'
                            onChange={(e)=> this.handleAgeChange(e.target.value)}
                        /><br></br>
                        <button style ={buttonStyle} >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
   
}