import React from "react"


export default function ProjectCard(probs){
    return (
        <div className="projectCard">
            <h1>{probs.name}</h1>
            <h3>{probs.details}</h3>
            <p>Started: {probs.date}</p>
        </div>
    )
}