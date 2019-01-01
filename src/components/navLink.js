import React from 'react';

const mouseLeaveStyle = {
    textDecoration: `none`,
    color: `white`,
    fontSize: `16px`,
}
const mouseOverStyle = {
    color: `#00b7eb`,
    fontSize: `16px`,
}

export class NavLink  extends React.Component{
    state = {
        hovered:false
    }   

    changeMousePosition(e) {
        this.setState((prevState) => {
            return{
                ...prevState,
                hovered: !prevState.hovered,
            }
        })
    }
    handleLogout(){
        if(this.props.clickFunc){
            this.props.clickFunc()
            return
        }
        this.props.history.push(this.props.path)
    }
    render(){
        return (
            <div 
                className='navBlock'
                onClick={()=>this.handleLogout()}
            >
                <div style={{padding: 20}}>
                    <span
                        onMouseEnter={(e) => this.changeMousePosition(e)}
                        onMouseLeave={(e) => this.changeMousePosition(e)}
                        style={this.state.hovered? mouseOverStyle : mouseLeaveStyle}
                    >
                        {this.props.name}
                    </span>
                </div>
            </div>
        )
    }

}