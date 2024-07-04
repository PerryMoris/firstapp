import React, { useState, useEffect } from 'react';
import api from "../api";
import { useParams, Link } from 'react-router-dom';

const UpdateTaskForm = () => {
    const { id } = useParams();  // Use useParams to get the taskId
    const [taskData, setTaskData] = useState({
        task: '',
        notes: '',
        challenges: ''
    });

    useEffect(() => {
        // Fetch task data from API using taskId
        api.get(`api/updatetask/${id}/`)
            .then(response => {
                setTaskData(response.data);
            })
            .catch(error => {
                console.error('Error fetching task data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`api/updatetask/${id}/`, taskData)
            .then(response => {
                console.log('Task updated successfully:', response.data);
                // Optionally handle success (e.g., show notification)
            })
            .catch(error => {
                console.error('Error updating task:', error);
                // Optionally handle error (e.g., show error message)
            });
    };

    return (
        <>
        <h3>Update/Edit this Task</h3>
            <form onSubmit={handleSubmit} className='form-container-right'>
                <label>
                    Task</label>
                    <textarea
                        type="text"
                        name="task"
                        value={taskData.task}
                        onChange={handleChange}
                        className="form-input"
                        rows={6}
                    />
                <label>
                    Notes</label>
                    <textarea
                        name="notes"
                        value={taskData.notes}
                        onChange={handleChange}
                        className="form-input"
                        rows={6}
                    />
                
                <label>
                    Challenges</label>
                    <textarea
                        name="challenges"
                        value={taskData.challenges}
                        onChange={handleChange}
                        className="form-input"
                        rows={6}
                    />
                <div className='flex-style'>
                <button className="form-button" type="submit">Update Task</button>
                <div><Link to="/" ><button className="form-button-close" >Close</button></Link></div>
                </div>
            </form>
        </>
    );
};

export default UpdateTaskForm;
