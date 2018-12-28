import React from 'react';



const userImageStyle = {
    height: `20vh`
}

const mouseEnteredBoxStyle = {
    margin: 5,
    whiteSpace: `nowrap`,
    backgroundColor: `#00b7eb`,
    borderRadius: 8,
    color: 'white',
}

const mouseLeaveBoxStyle = {
    margin: 5,
    whiteSpace: `nowrap`,
    backgroundColor: `white`,
    borderRadius: 8,
}


export default class SelecetUserBox extends React.Component{
    state = {
        hovered: false,
    }

    handleMouseOverAndLeave(){
        this.setState((prevState)=>{
            return {
                ...this.state,
                hovered: !prevState.hovered
            }
        })
    }
    render(){
        return (
            <div 
                style={this.state.hovered? mouseEnteredBoxStyle : mouseLeaveBoxStyle} 
                key={this.props.user.name}
                onMouseEnter={()=>this.handleMouseOverAndLeave()}
                onMouseLeave={()=>this.handleMouseOverAndLeave()}
            >
                <p 
                    style={this.state.hovered? mouseEnteredBoxStyle : mouseLeaveBoxStyle} 
                >
                    {this.props.user.name}
                </p>
                <img 
                    style={userImageStyle}
                    src={`/avatars/${this.props.user.avatarURL}.svg`}
                    alt='user'
                />
            </div>
        )

    }
}