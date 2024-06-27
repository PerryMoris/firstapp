import React from 'react'
import logo from '../user.png';
import {Link} from "react-router-dom"

function Header(){
    return (
        <nav className='App-header'>
            <h1>ISD-Team</h1>
            <div className='nav--right'>
                <h4>Project Tracker</h4>
                <Link to="/" style={{ textDecoration: 'none'}}><a className='nav--button'>Home</a></Link>
                <Link to="/projects" style={{ textDecoration: 'none'}} ><a className='nav--button'>Projects</a></Link>
                <div className='profile'>
                    <Link to='/'><img src={logo} alt='logo'/></Link>
                </div>   
            </div>
            
        </nav>
    )
}

export default Header;