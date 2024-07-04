import React from 'react'
import ProjectCard from "./ProjectCard"
import {Link} from "react-router-dom"
import API_URL from "../Urls"
import {useEffect, useState} from 'react'
import Button from '@mui/material/Button';

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
          <div className='flex-style-start'>
            <h1 style={{marginRight: 15}}>Projects page</h1>
            <Link to="/projects" >
            <Button
              variant="contained"
              color="success"
            >
              Add Project
            </Button></Link>
            </div>
         <hr />
          <div className='grpProject'>
            

            {allp}
            
          </div>
        </div>
    )
}