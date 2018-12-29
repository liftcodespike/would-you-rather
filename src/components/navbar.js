
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from './navLink';
import { logout } from './../actions/login'

const welcomeMessageStyle = {
    color: 'white',
    margin: 5,
}
const logoutWrapper = {
    marginLeft: `3vw`,
    color: `white`,
    fontSize: `16`,
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
                    clickFunc = {()=>console.log(props)}
                />
                <NavLink
                    name='LeaderBoard'
                />
                <NavLink
                    name='Home'
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