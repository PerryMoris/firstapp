import React from 'react'
import ProjectCard from "./ProjectCard"
// import {Link} from "react-router-dom"
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