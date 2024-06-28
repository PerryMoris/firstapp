import React from 'react'
import ProjectCard from "./ProjectCard"
import {Link} from "react-router-dom"

export default function Projects(){
  const pjects =[
    {
      name: "Gallop 1",
      details: "Inspection of all galop schools in the country",
      date: "27/12/2024"
    },
    {
      name: "Gallop 2",
      details: "Inspection of all galop schools in the country, from basic to SHS, all pretertiary schools",
      date: "04/06/2024"
    },
    {
      name: "BigWin",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/09/2023"
    },
    {
      name: "CEPS",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/06/2024"
    },
    {
      name: "Category of concern",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/06/2024"
    },
  ]
  const allp = pjects.map((projects) => {
    return `<Link to="/" style={{ textDecoration: 'none'}}>
              <ProjectCard 
                name={projects.name}
                details={projects.details}
                date={projects.date}
              />
            </Link>`
  })
    return (
        <div >
          <h1>Projects page</h1>
          <div className='grpProject'>
            {allp}
            <Link to="/" style={{ textDecoration: 'none'}}>
              <ProjectCard 
                name="Gallop 1"
                details="Inspection of all galop schools in the country"
                date='12/12/2024'
              />
            </Link>
            <ProjectCard 
              name="Gallop 2"
              details="Inspection of all galop schools in the country, from basic to SHS, all pretertiary schools"
              date='12/12/2024'
            />
          </div>
        </div>
    )
}