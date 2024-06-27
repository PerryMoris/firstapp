import React from 'react'
import logo from '../user.png';

function Header(){
    return (
        <nav className='App-header'>
            <h1>ISD-Team</h1>
            <div className='nav--right'>
            <h4>Project Tracker</h4>
            <div className='profile'>
                <a href='#'><img src={logo} alt='logo'/></a>
            </div>
            
                
            </div>
            
        </nav>
    )
}

export default Header;