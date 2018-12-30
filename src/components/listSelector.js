import React from 'react'
import { questionList } from './questionList';

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

export class ListSelector extends React.Component{
    state= { 
        clicked: 'unanswered'
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


