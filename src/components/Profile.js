import React from 'react'
import logo from '../user.png';


export default function Profile(){
    return (
        <div >
            <h1>Profile page</h1>
            <div className='profile-card'>
                <img className='profile-image' alt='profilePic' src={logo} />
                <h2>Justice Morison</h2>
            </div>
        </div>
    )
}