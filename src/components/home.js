import React from 'react'
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import { NavBar } from './navbar';

class Home extends React.Component{
    state= { 
        clicked: 'answered'
    }
    func() {
        return <div>s</div>
    }
    render(){
        if(!this.props.user){
            return (   
                <Redirect to='/'/>
            )
        }
        return (
            <div>
            <NavBar 
                user={this.props.user}
            />
            {this.func()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {

    return {
        user: state.loggedInUser,
    }
};

export default connect(mapStateToProps)(Home);
