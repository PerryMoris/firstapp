import React from 'react'
import logo from '../user.png';
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    return (
        <nav className='App-header'>
            <h1 className='headername'>ISD-Team  <Diversity2Icon color='warning'/></h1>
            <div className='nav--right'>
                <h4>Project Tracker</h4>
                <Link to="/" style={{ textDecoration: 'none'}}><p className='nav--button'><HomeIcon />  <span className='hide'>&nbsp; Home</span></p></Link>
                <Link to="/projects" style={{ textDecoration: 'none'}} ><p className='nav--button'><WorkIcon />  <span className='hide'>&nbsp;Projects</span></p></Link>
                <Link to="/stakeholder" style={{ textDecoration: 'none'}} ><p className='nav--button'><Diversity3Icon />  <span className='hide'>&nbsp;Stakeholders</span></p></Link>
                <Link to="/tasks" style={{ textDecoration: 'none'}} ><p className='nav--button'><TaskIcon />  <span className='hide'>&nbsp; Tasks</span></p></Link>
              
                <Link to="/register" style={{ textDecoration: 'none'}} ><p className='nav--button'><HowToRegIcon />  <span className='hide'>&nbsp;Register</span></p></Link>
                <Link to="/logout" style={{ textDecoration: 'none'}} ><p className='nav--buttonLogout'>Logout</p></Link>
               
                {/* <div className='profile'> */}
                    <Link  to='/profile' style={{ textDecoration: 'none'}}><p className='nav--button'><AccountCircleIcon /><span className='hide'>&nbsp; Profile</span></p></Link>
                {/* </div>    */}
            </div>
            
        </nav>
    )
}

export default Header;