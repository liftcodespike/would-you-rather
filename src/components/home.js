import React from 'react'
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import { NavBar } from './navbar';


class Home extends React.Component{
    render(){
        if(!this.props.user){
            return (   
                <Redirect to='/'/>
            )
        }
        return (
            <NavBar 
                user={this.props.user}
            >
                
            </NavBar>
        )
    }
};

const mapStateToProps = (state) => {

    return {
        user: state.loggedInUser,
    }
};

export default connect(mapStateToProps)(Home);
