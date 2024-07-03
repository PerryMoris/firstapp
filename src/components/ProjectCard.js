import React from "react"
import {Link} from "react-router-dom"

export default function ProjectCard(props){
    return (
        <div className="projectCard">
            {props.status == "Closed" ? <div className="card--badge">{props.status}</div> : <div className="card--badge-b">{props.status}</div>}
            <h1>{props.name.length > 10 ? props.name.substring(0, 10) + "..." : props.name}</h1>
            <hr/>
            <h3>{props.details.length > 35 ? props.details.substring(0, 32) + "..." : props.details}</h3>
            <p>Started: {props.startdate}</p>
            <Link to="/projects" style={{ textDecoration: 'none'}}><p className='card--button'>View Details</p></Link>
        </div>
    )
}