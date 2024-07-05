import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import API_URL from '../Urls';
import ProjectCard from './ProjectCard';
import { TextareaAutosize } from '@mui/material';
import api from '../api';

const Projects = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setPname] = useState("");
  const [details, setPdetails] = useState("");
  const [startdate, setPstart] = useState("");
  const [enddate, setPend] = useState("");
  const [status, setPstatus] = useState("Open");
  
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


  const createNote = (e) => {
    e.preventDefault();
    api
        .post("/api/createproject/", { name, details, startdate, enddate, status })
        .then((res) => {
            if (res.status === 201) {
              alert("Project created!");
              window.location.reload(); // Reload the page on success
            } else {
              alert("Failed to make project.");
            }
          })
        .catch((err) => alert(err));
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
         
          <form onSubmit={createNote}>
          <h2 className='black'>Add New Project</h2>
            <TextField
              fullWidth
              required
              id='name'
              name='name'
              label='Name'
              margin='normal'
              value={name}
              onChange={(e) => setPname(e.target.value)}
              
            />
            <TextField
              fullWidth
              required
              id='details'
              name='details'
              label='Details'
              value={details}
              onChange={(e) => setPdetails(e.target.value)}
              margin='normal'
            />
            <TextField
              fullWidth
              required
              id='startdate'
              name='startdate'
              label='Start Date'
              type='date'
              value={startdate}
              onChange={(e) => setPstart(e.target.value)}
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
              value={enddate}
              onChange={(e) => setPend(e.target.value)}
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type='submit' variant='contained' color='primary'>
              Add Project
            </Button>
            <Button onClick={handleCloseModal} variant='contained' color='error'>
              Close
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;
