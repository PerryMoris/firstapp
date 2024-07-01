import React from 'react'
import ProjectCard from "./ProjectCard"
// import {Link} from "react-router-dom"
import pjects from "../Data"
export default function Projects(){

  const allp = pjects.map((projects) => {
    return <ProjectCard 
              key={projects.id}
                {...projects}
              />
  })
    return (
        <div >
          <h1>Projects page</h1>
          <div className='grpProject'>
            

            {allp}
            
          </div>
        </div>
    )
}