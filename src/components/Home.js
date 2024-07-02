import React from 'react'
import Mytasks from './Mytasks'
import { useEffect, useState } from 'react';
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


export default function Home(){
    const [task, setTask] = useState("");
    const [notes, setNotes] = useState("");
    const [challenges, setChallenges] = useState("");
    const navigate = useNavigate();
    const route = "/api/task"

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(route, { task, notes, challenges })
           
            
        } catch (error) {
            alert(error)
        }
    };

    
    return (
        <div className='Homepage' >
            
            <div>
                <h3>My Tasks</h3>
                <Mytasks />
                </div>
                <div className='rightform'>
                    <h3>Create Task</h3>
                    <form onSubmit={handleSubmit} className="form-container">
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