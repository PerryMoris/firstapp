import React from 'react'
import Mytasks from './Mytasks'
import { useEffect, useState } from 'react';
import api from "../api";
// import { useNavigate } from "react-router-dom";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import API_URL from "../Urls"

export default function Home(){
    const [task, setTask] = useState("");
    const [notes, setNotes] = useState("");
    const [challenges, setChallenges] = useState("");
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
            .post("/api/createtask/", { project: selectedProject, task, notes, challenges })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                
            })
            .catch((err) => alert(err));
    };


    
    return (
        <div className='Homepage' >
            
                <div className='leftform'>
                    <h3>My Tasks</h3>
                    <Mytasks />
                </div>
                <div className='rightform'>
                    
                    <form onSubmit={createNote} className="form-container-right">
                    <h3>Create Task</h3>
                   
                            <select className="form-input" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}> 
                            <option value="">Select a project</option> 
                            {projects.map(project => ( <option key={project.id} value={project.id}>{project.name}</option> ))} 
                            </select>
                     
                    <textarea 
                        rows={5}
                        className="form-input"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Task"
                        
                    />
                    <textarea 
                        rows={5}
                        className="form-input"
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Notes"
                    />
                    <textarea 
                        rows={5}
                        className="form-input"
                        type="text"
                        value={challenges}
                        onChange={(e) => setChallenges(e.target.value)}
                        placeholder="Challenges"
                    />
                    
                    <button className="form-button" type="submit">
                        Add
                    </button>
                </form>
                </div>
           
        </div>
    )
}

// import React, { useState, useEffect }
// from 'react'; import axios from 'axios';
// import API_URL from "../Urls"

// export default function Home() { 
//     const [projects, setProjects] = useState([]); 
//     const [selectedProject, setSelectedProject] = useState(""); 
//     const [task, setTask] = useState(""); 
//     const [notes, setNotes] = useState(""); 
//     const [challenges, setChallenges] = useState(""); 
//     const [data, setData] = useState([])
//     useEffect(() => {
//       async function fetchData(){
//         try {
//           const response = await fetch(`${API_URL.projects}`)
//           if (!response.ok){
//             throw new Error('Network response was not successfull');
//           }
//           const result = await response.json()
//           console.log(result)
//           setProjects(result)
//         } catch (error) {
//           console.error('Error fetching data: ', error)
//         }
//       }
  
//       fetchData();
//     }, []);
//     useEffect(() => { 
//         // Fetch projects from the backend 
//         axios.get('/api/projects/') 
//         .then(response => { 
//             setProjects(response.data); 
//             console.log(response.data)
//         }) 
//         .catch(error => { 
//             console.error("There was an error fetching the projects!", error); 
//         }); }, []); 
//         const createNote = (e) => { 
//             e.preventDefault(); 
//             const data = { project: selectedProject, task, notes, challenges }; 
//             axios.post('/api/createtask/', data) 
//             .then((res) => { 
//                 if (res.status === 201) { 
//                     alert("Note created!"); 
//                 } else { 
//                     alert("Failed to make note."); } }) 
//                     .catch((err) => alert(err)); }; 
//                     return ( 
//                     <div> <form onSubmit={createNote}> 
//                     <label> Project: 
//                         <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}> 
//                         <option value="">Select a project</option> 
//                         {projects.map(project => ( <option key={project.id} value={project.id}>{project.name}</option> ))} 
//                         </select></label> 
//                         <label> Task: <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /> 
//                         </label> <label> Notes: <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} /> </label> 
//                         <label> Challenges: <input type="text" value={challenges} onChange={(e) => setChallenges(e.target.value)} /> 
//                         </label> <button type="submit">Create Task</button> </form> </div> 
//                         ); }