import React from 'react'
import { questionList } from './questionList';

const wrapper = {
    margin: `auto`,
    height: `60vh`,
    width: `40vw`,
    border: `thin solid black`,
    textAlign: `center`,
    marginTop:'3vh',
    borderRadius: 8,

}
const tabUnselected = {
    margin: `auto`,
    height: `8vh`,
    width: `18vw`,
    border: `thin solid black`,
    borderBottom: 'none',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: `#303030`,
    color:'white'
}
const tabSelected = {
    margin: `auto`,
    height: `8vh`,
    width: `18vw`,
    border: `thin solid black`,
    borderBottom: 'none',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: `#eaeaea`,
}
export class ListSelector extends React.Component{
    state= { 
        clicked: 'answered'
    }
    changeTab(status){
        this.setState((prevState)=>{
            return {
                ...prevState,
                clicked: status,
            }
        })
    }
    render() {
        if (this.state.clicked === 'answered') {
            return (
                <div 
                    style={wrapper}
                >
                    <div
                        className='listSelector'
                        style={tabSelected}
                        
                        onClick={()=>this.changeTab('unanswered')}
                    >
                        Answered
                    </div>
                    <div
                        className='listSelector'
                        style={tabUnselected}
                        onClick={()=>this.changeTab('answered')}
                    >
                        Unanswered    
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
                    style={tabUnselected}
                    onClick={()=>this.changeTab('unanswered')}
                >
                    Answered
                </div>
                <div
                    className='listSelector'
                    style={tabSelected}
                    onClick={()=>this.changeTab('answered')}
                >
                    
                    Unanswered
                </div>

            </div>
        )  
    }

};


