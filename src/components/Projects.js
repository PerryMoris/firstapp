import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import API_URL from '../Urls';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    details: '',
    startdate: '',
    enddate: '',
    status: 'Open', // Set default status if needed
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL.projects}`);
        if (!response.ok) {
          throw new Error('Network response was not successful');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL.projects}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
      const result = await response.json();
      console.log('Project added successfully:', result);

      // Optionally, update state or close modal after successful submission
      setData([...data, result]); // Assuming result is the new project object from API
      handleCloseModal();
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project. Please try again.');
    }
  };

  const allProjects = data.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ));

  return (
    <div>
      <div className='flex-style-start'>
        <h1 style={{ marginRight: 15 }}>Projects page</h1>
        <Button
          variant='contained'
          color='success'
          onClick={handleOpenModal}
        >
          Add Project
        </Button>
      </div>
      <hr />
      <div className='grpProject'>{allProjects}</div>

      {/* Modal for adding project */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id='modal-modal-title'>Add New Project</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              required
              id='name'
              name='name'
              label='Name'
              value={newProject.name}
              onChange={handleChange}
              margin='normal'
            />
            <TextField
              fullWidth
              required
              id='details'
              name='details'
              label='Details'
              value={newProject.details}
              onChange={handleChange}
              margin='normal'
            />
            <TextField
              fullWidth
              required
              id='startdate'
              name='startdate'
              label='Start Date'
              type='date'
              value={newProject.startdate}
              onChange={handleChange}
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id='enddate'
              name='enddate'
              label='End Date'
              type='date'
              value={newProject.enddate}
              onChange={handleChange}
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type='submit' variant='contained' color='primary'>
              Add
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;
