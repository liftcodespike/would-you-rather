
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from './navLink';
import { logout } from './../actions/login'
import { Redirect } from 'react-router-dom';

const welcomeMessageStyle = {
    color: 'white',
    margin: 5,
}

const navWrapper = {
    backgroundColor: `#303030`,
    padding: 10,
    verticalAlign: `middle`,
}

const userImgStyle = {
    height: `6vw`
}

const spacer = {
    width: `12vw`,
    display: 'inline-block',
}

const Navbar = (props) => {
    return (
        <div style={navWrapper}>
            <div className='navBlock'>
                <img 
                    style={userImgStyle}
                    src={`/avatars/${props.user.avatarURL}.svg`}
                    alt='user'
                />
            </div>
            <div className='navBlock'>
                <span style={welcomeMessageStyle}>Welcome, {props.user.name}! </span>
            </div>
            <div style={spacer}/>
                <NavLink
                    name='New Question'
                    path='/new'
                    history={props.history}
                />
                <NavLink
                    name='LeaderBoard'
                    path='/leaderboard'
                    history={props.history}
                />
                <NavLink
                    name='Home'
                    path='/home'
                    history={props.history}
                />
                <NavLink
                    name='Logout'
                    clickFunc = {()=>props.logout()}
                /> 
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>  {
    return {
        logout:()=> dispatch(logout())
    }
}

export const NavBar = connect(null, mapDispatchToProps)(Navbar);