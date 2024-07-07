import React from "react"
import {Link} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ProjectCard(props){
    return (
        <div className="projectCard">
            {props.status == "Closed" ? <div className="card--badge">{props.status}</div> : <div className="card--badge-b">{props.status}</div>}
            <h1>{props.name.length > 10 ? props.name.substring(0, 10) + "..." : props.name}</h1>
            <hr/>
            <h3 style={{height: 40}}>{props.details.length > 35 ? props.details.substring(0, 32) + "..." : props.details}</h3>
            <p>Started: {props.startdate} {props.id}</p>
            <Link to={`/projectdetails/${props.id}/`} style={{ textDecoration: 'none' }}>
                <p className='card--button'><VisibilityIcon />&nbsp; View Details</p>
            </Link>
        </div>
    )
}