import React from "react"
import {Link} from "react-router-dom"

export default function ProjectCard(props){
    return (
        <div className="projectCard">
            {props.closed && <div className="card--badge">Closed</div>}
            <h1>{props.name}</h1>
            <h3>{props.details}</h3>
            <p>Started: {props.date}</p>
            <Link to="/projects" style={{ textDecoration: 'none'}}><p className='card--button'>Open</p></Link>
        </div>
    )
}