import React from 'react'
import Mytasks from './Mytasks'
import { useEffect, useState } from 'react';
import api from "../api";
import SaveIcon from '@mui/icons-material/Save';
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
                if (res.status === 201) {
                  alert("Task created!");
                  window.location.reload(); // Reload the page on success
                } else {
                  alert("Failed to make task.");
                }
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
                        <SaveIcon />&nbsp;  Add
                    </button>
                </form>
                </div>
           
        </div>
    )
}



// import React from 'react';
// import Mytasks from './Mytasks';
// import { useEffect, useState } from 'react';
// import api from "../api";
// import API_URL from "../Urls";
// import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
// import { Add as AddIcon, Task as TaskIcon, Notes as NotesIcon } from '@mui/icons-material';


// export default function Home() {
//     const [task, setTask] = useState("");
//     const [notes, setNotes] = useState("");
//     const [challenges, setChallenges] = useState("");
//     const [projects, setProjects] = useState([]); 
//     const [selectedProject, setSelectedProject] = useState(""); 

//     useEffect(() => {
//         async function fetchData(){
//             try {
//                 const response = await fetch(`${API_URL.projects}`)
//                 if (!response.ok){
//                     throw new Error('Network response was not successful');
//                 }
//                 const result = await response.json();
//                 console.log(result);
//                 setProjects(result);
//             } catch (error) {
//                 console.error('Error fetching data: ', error);
//             }
//         }
//         fetchData();
//     }, []);

//     const createNote = (e) => {
//         e.preventDefault();
//         api.post("/api/createtask/", { project: selectedProject, task, notes, challenges })
//             .then((res) => {
//                 if (res.status === 201) {
//                     alert("Note created!");
//                     window.location.reload(); // Reload the page on success
//                 } else {
//                     alert("Failed to make note.");
//                 }
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div className='Homepage'>
//             <div className='leftform'>
//                 <h3>My Tasks</h3>
//                 <Mytasks />
//             </div>
//             <div className='rightform'>
//                 <form onSubmit={createNote} className="form-container-right">
//                     <h3>Create Task</h3>
//                     <FormControl className="form-input">
//                         <InputLabel id="project-label">Select a project</InputLabel>
//                         <Select
//                             labelId="project-label"
//                             value={selectedProject}
//                             onChange={(e) => setSelectedProject(e.target.value)}
//                         >
//                             {projects.map(project => (
//                                 <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         className="form-input"
//                         type="text"
//                         label="Task"
//                         value={task}
//                         onChange={(e) => setTask(e.target.value)}
//                         InputProps={{
//                             startAdornment: (
//                                 <TaskIcon />
//                             ),
//                         }}
//                     />
//                     <TextField
//                         className="form-input"
//                         type="text"
//                         label="Notes"
//                         value={notes}
//                         onChange={(e) => setNotes(e.target.value)}
//                         InputProps={{
//                             startAdornment: (
//                                 <NotesIcon />
//                             ),
//                         }}
//                     />
//                     <TextField
//                         className="form-input"
//                         type="text"
//                         label="Challenges"
//                         value={challenges}
//                         onChange={(e) => setChallenges(e.target.value)}
//                         InputProps={{
                            
//                         }}
//                     />
//                     <Button
//                         className="form-button"
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         startIcon={<AddIcon />}
//                     >
//                         Add
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// }
