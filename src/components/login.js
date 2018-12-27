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
    height: `75vh`,
    width: `60vw`,
    minHeight: `220px`,
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

export class Login extends React.Component{
    state = {
        nameValue: '',
        ageValue: '',
        hasErrors: false,

    }

    handleFieldChange(value, field){
        
        this.setState((prevState)=>{
            console.log(value)
            return {
                ...prevState,
                [field]: value
            }
        })
    }
    render(){
        return (
            <div style = {overlayStyle} >
                <div style ={loginBoxStyle}>
                    <h2>Login here to use this site.</h2>
                    <form>
                        <input 
                            style={input} 
                            type='text' 
                            value={this.state.nameValue} 
                            placeholder='Enter your name here'
                            onChange={(e)=> this.handleFieldChange(e.target.value, 'nameValue')}
                        /><br></br>
                        <input 
                            style={input} 
                            type='number' 
                            value={this.state.ageValue} 
                            placeholder='Enter your age here'
                            onChange={(e)=> this.handleFieldChange(e.target.value, 'ageValue')}
                        /><br></br>
                        <button style ={buttonStyle} >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
   
}