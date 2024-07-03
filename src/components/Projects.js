import React from 'react'
import ProjectCard from "./ProjectCard"
// import {Link} from "react-router-dom"
<<<<<<< HEAD

export default function Projects(){
  const pjects =[
    {
      id : 1,
      name: "Gallop 1",
      details: "Inspection of all galop schools in the country",
      date: "27/12/2024"
    },
    {
      id : 2,
      name: "Gallop 2",
      details: "Inspection of all galop schools in the country, from basic to SHS, all pretertiary schools",
      date: "04/06/2024"
    },
    {
      id : 3,
      name: "BigWin",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/09/2023"
    },
    {
      id : 4,
      name: "CEPS",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/06/2024"
    },
    {
      id : 5,
      name: "Category of concern",
      details: "Inspection of all selected schools in the country, for bigwin project",
      date: "04/06/2024"
    },
  ]
  const allp = pjects.map((projects) => {
    return <ProjectCard 
                name={projects.name}
                details={projects.details}
                date={projects.date}
                key={projects.id}
=======
import API_URL from "../Urls"
import {useEffect, useState} from 'react'


export default function Projects(){
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch(`${API_URL.projects}`)
        if (!response.ok){
          throw new Error('Network response was not successfull');
        }
        const result = await response.json()
        console.log(result)
        setData(result)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    fetchData();
  }, []);
  console.log(data)
  const allp = data.map((projects) => {
    return <ProjectCard 
              key={projects.id}
                {...projects}
>>>>>>> 951b489ef9e601a4082a9ea5c3c967afcb539463
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