import React from 'react'
import logo from '../user.png';
import {Link} from "react-router-dom"



function Header(){
    return (
        <nav className='App-header'>
            <h1 className='headername'>ISD-Team</h1>
            <div className='nav--right'>
                <h4>Project Tracker</h4>
                <Link to="/" style={{ textDecoration: 'none'}}><p className='nav--button'>Home</p></Link>
                <Link to="/projects" style={{ textDecoration: 'none'}} ><p className='nav--button'>Projects</p></Link>
                <Link to="/stakeholder" style={{ textDecoration: 'none'}} ><p className='nav--button'>Stakeholders</p></Link>
                <Link to="/tasks" style={{ textDecoration: 'none'}} ><p className='nav--button'>Tasks</p></Link>
              
                <Link to="/register" style={{ textDecoration: 'none'}} ><p className='nav--button'>Register</p></Link>
                <Link to="/logout" style={{ textDecoration: 'none'}} ><p className='nav--buttonLogout'>Logout</p></Link>
               
                {/* <div className='profile'> */}
                    <Link className='profile' to='/profile'><img src={logo} alt='logo'/></Link>
                {/* </div>    */}
            </div>
            
        </nav>
    )
}

export default Header;