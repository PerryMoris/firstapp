import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function ProjectCard(props) {
    const { startdate, enddate } = props;

    // Calculate progress percentage
    const startDate = new Date(startdate);
    const endDate = new Date(enddate);
    const currentDate = new Date();
    
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = currentDate.getTime() - startDate.getTime();
    let progress = Math.floor((elapsedDuration / totalDuration) * 100);

    // Ensure progress does not exceed 100%
    progress = progress > 100 ? 100 : progress;

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        width: 200,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <div className="projectCard">
            {props.status === "Closed" ? <div className="card--badge">{props.status}</div> : <div className="card--badge-b">{props.status}</div>}
            <h1>{props.name.length > 10 ? props.name.substring(0, 10) + "..." : props.name}</h1>
            <hr/>
            <h3 style={{ height: 40 }}>{props.details.length > 35 ? props.details.substring(0, 32) + "..." : props.details}</h3>
            <small>{props.startdate} - {props.enddate}</small>
            <div>
                <BorderLinearProgress variant="determinate" value={progress} />{progress}%
            </div>
            <Link to={`/projectdetails/${props.id}/`} style={{ textDecoration: 'none' }}>
                <p className='card--button'><VisibilityIcon />&nbsp; View Details</p>
            </Link>
        </div>
    );
}
