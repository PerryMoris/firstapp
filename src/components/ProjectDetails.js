import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StakeholderCard from './StackHoldersCard'; 
import TaskCard from './TaskCard'; 
import LoadingIndicator from "./LoadingIndicator";
import api from '../api';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const response = await api.get(`/api/sproject/${projectId}/`);
        setProject(response.data[0]); // Assuming the API returns an array with a single object
        console.log(response.data[0]); // Confirm the data fetched
      } catch (error) {
        console.error('Error fetching project details:', error);
        alert('Failed to fetch project details');
      }
    };

    getProjectDetails();
  }, [projectId]);

  if (!project) {
    return <LoadingIndicator />;
  }

  // Once project is loaded, render the details
  return (
    <div className='prodet'>
        <div className='detail-cont'>
            <div className='detail-head'>
                <h1>{project.name}</h1>
                <p><strong>Details:</strong> {project.details}</p>
                <p><strong>Status:</strong> {project.status}</p>
                <p><strong>Date:</strong> {project.startdate} - {project.enddate}</p>
            </div>
        </div>
        <hr />
        <div>
            <StakeholderCard projectId={project.id} />
            <hr />
            <TaskCard projectId={project.id} />
        </div>
    </div>
  );
}
