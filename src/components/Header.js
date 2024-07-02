import React from 'react'
import logo from '../user.png';
import {Link, Navigate} from "react-router-dom"



function Header(){
    return (
        <nav className='App-header'>
            <h1>ISD-Team</h1>
            <div className='nav--right'>
                <h4>Project Tracker</h4>
                <Link to="/" style={{ textDecoration: 'none'}}><p className='nav--button'>Home</p></Link>
                <Link to="/projects" style={{ textDecoration: 'none'}} ><p className='nav--button'>Projects</p></Link>
               
                <div className='profile'>
                    <Link to='/profile'><img src={logo} alt='logo'/></Link>
                </div>   
            </div>
            
        </nav>
    )
}

export default Header;