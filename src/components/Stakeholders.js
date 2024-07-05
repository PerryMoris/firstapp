import React from 'react'
import StackHoldersCard2 from './StackHoldersCard2';
import { useEffect, useState } from 'react';
import api from "../api";
// import { useNavigate } from "react-router-dom";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import API_URL from "../Urls"
import { TextField } from '@mui/material';

export default function Stakeholder(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [activity, setActivity] = useState("");
        const [projects, setProjects] = useState([]); 
        const [selectedProject, setSelectedProject] = useState(""); 
    // const navigate = useNavigate();
    // const route = "/api/task"

        useEffect(() => {
            async function fetchData(){
            try {
                const response = await fetch(`${API_URL.projects}`)
                if (!response.ok){
                throw new Error('Network response was not successfull');
                }
                const result = await response.json()
                console.log(result)
                setProjects(result)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
            }

            fetchData();
        }, []);
    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/createstake/", { project: selectedProject, name, email, position, activity })
            .then((res) => {
                if (res.status === 201) {
                  alert("Stakeholder created!");
                  window.location.reload(); // Reload the page on success
                } else {
                  alert("Failed to make stakeholder.");
                }
              })
            .catch((err) => alert(err));
    };


    
    return (
        <div className='Homepage' >
            
                <div className='leftform'>
                    <h3>Stakeholders</h3>
                    <StackHoldersCard2 />
                </div>
                <div className='rightform'>
                    
                    <form onSubmit={createNote} className="form-container-right">
                    <h3>Create Task</h3>
                   
                            <select className="form-input" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}> 
                            <option value="">Select a project</option> 
                            {projects.map(project => ( <option key={project.id} value={project.id}>{project.name}</option> ))} 
                            </select>
                     
                    <input
                        className="form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        
                    />
                    <input
                        className="form-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        className="form-input"
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Position"
                    />
                    <textarea 
                        rows={5}
                        className="form-input"
                        type="text"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        placeholder="Activity"
                    />
                    
                    <button className="form-button" type="submit">
                        Add Stakeholder
                    </button>
                </form>
                </div>
           
        </div>
    )
}


