import React from 'react'
import ProjectCard from "./ProjectCard"
import {Link} from "react-router-dom"

export default function Projects(){
  const pjects =[
    {
      name: "Gallop 1",
      details: "Inspection of all galop schools in the country",
      date: "27/12/2024",
      closed: false,
    },
    {
      name: "Gallop 2",
      details: "Inspection of all galop schools in the country, from basic to SHS, all pretertiary schools",
      date: "04/06/2024",
      closed: true,
    },
    {
      name: "BigWin",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/09/2023",
      closed: true,
    },
    {
      name: "CEPS",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/06/2024",
      closed: false,
    },
    {
      name: "Category of concern",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/06/2024",
      closed: true,
    },
  ]
  const allp = pjects.map((projects) => {
    return <ProjectCard 
                name={projects.name}
                details={projects.details}
                date={projects.date}
                closed={projects.closed}
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