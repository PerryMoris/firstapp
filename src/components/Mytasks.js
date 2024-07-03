import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import api from "../api";
import Button from '@mui/material/Button';


export default function Mytasks() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/createtask/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };
    const deleteTask = (taskId) => { 
            api
            .delete(`/api/taskdelete/${taskId}/`) 
          .then(response => { 
            if (response.status === 204) { 
              setNotes(notes.filter(task => task.id !== taskId)); 
            } else { 
              alert("Failed to delete task."); } }) 
              .catch(error => { console.error("There was an error deleting the task!", error); 
      
              }); }; 
    const DeleteButton = ({ id, onDelete }) => (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </Button>
              );
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'project_name', headerName: 'Project', width: 130 },
        { field: 'task', headerName: 'Task', width: 130 ,wrapText: true },
        {
          field: 'notes',
          headerName: 'Notes',
          width: 90,
          wrapText: true ,
        },
        {
          field: 'challenges',
          headerName: 'Challenges',
          width: 160,
          wrapText: true ,
        },
        {
          field: 'created_at',
          headerName: 'Created On',
          width: 160,
        },
        { 
          field: 'actions',
          headerName: 'Actions',
          width: 120,
          renderCell: (params) => (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteTask(params.row.id)}
            >
              Delete
            </Button>
          ),
        },
        // { Header: 'Actions', accessor: 'id', Cell: ({ value }) => ( 
        //     // <Button variant="contained" color="secondary" onClick={() => deleteTask(value)} > Delete </Button>
        //     // <DeleteButton {deleteTask(value)} /> 
        //   ) 
        // },
      ];
    
  return (
    <div className='Tablestyle'>
      <DataGrid
        rows={notes}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className="custom-datagrid"
      />
    </div>
  );
}




/////with delete

// import React, { useState, useEffect, useMemo }from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import api from "../api";
// import { useTable, useFilters } from 'react-table';
// import { CSVLink } from 'react-csv';

// export default function Mytask() {
//   const [tasks, setTasks] = useState([]); 

//   useEffect(() => { 
//     api
//     .get('/api/createtask/') 
//     .then(response => { setTasks(response.data); 
//       console.log(response.data)
//     }) 
//     .catch(error => { 
//       console.error("There was an error fetching the tasks!", error); 
//     }); }, []); 
    
//     const deleteTask = (taskId) => { 
//       api
//       .delete(`/api/taskdelete/${taskId}/`) 
//     .then(response => { 
//       if (response.status === 204) { 
//         setTasks(tasks.filter(task => task.id !== taskId)); 
//       } else { 
//         alert("Failed to delete task."); } }) 
//         .catch(error => { console.error("There was an error deleting the task!", error); 

//         }); }; 
//         return ( 
//         <TableContainer component={Paper}> 
//         <Table> <TableHead> <TableRow> 
//           <TableCell>Project</TableCell> 
//           <TableCell>Task</TableCell> 
//           <TableCell>Notes</TableCell> 
//           <TableCell>Challenges</TableCell> 
//           <TableCell>Created At</TableCell> 
//           <TableCell>Actions</TableCell> 
//           </TableRow> 
//           </TableHead> 
//           <TableBody> 
//             {tasks.map(task => ( <TableRow key={task.id}> 
//               <TableCell>{task.project_name}</TableCell> 
//               <TableCell>{task.task}</TableCell> 
//               <TableCell>{task.notes}</TableCell> 
//               <TableCell>{task.challenges}</TableCell> 
//               <TableCell>{new Date(task.created_at).toLocaleString()}</TableCell> 
//               <TableCell> 
//                 <Button variant="contained" color="secondary" onClick={() => deleteTask(task.id)} > Delete </Button> 
//                 </TableCell> </TableRow> ))} </TableBody> </Table> </TableContainer> 
//       ); }






      // const data = useMemo(() => tasks, [tasks]); 
      // const columns = useMemo(() => [ 
      //   { Header: 'Project', accessor: 'project.name' }, 
      //   { Header: 'Task', accessor: 'task' },
      //   { Header: 'Notes', accessor: 'notes' }, 
      //   { Header: 'Challenges', accessor: 'challenges' }, 
      //   { Header: 'Created At', accessor: 'created_at', Cell: ({ value }) => new Date(value).toLocaleString() }, 
      //   { Header: 'Actions', accessor: 'id', Cell: ({ value }) => ( 
      //   <Button variant="contained" color="secondary" onClick={() => deleteTask(value)} > Delete </Button> 
      // ) } ], [deleteTask]); 
      // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = useTable({ columns, data }, useFilters); 
      // return ( 
      // <div> <CSVLink data={tasks} filename={"tasks.csv"}> 
      // <Button variant="contained" color="primary"> Export to CSV </Button> 
      // </CSVLink> 
      // <TableContainer component={Paper}> 
      //   <Table {...getTableProps()}> <TableHead> {headerGroups.map(headerGroup => ( 
      //     <TableRow {...headerGroup.getHeaderGroupProps()}> 
      //     {headerGroup.headers.map(column => ( <TableCell {...column.getHeaderProps()}> 
      //       {column.render('Header')} <div> {column.canFilter ? column.render('Filter') : null} 
      //         </div> </TableCell> ))} </TableRow> ))} </TableHead> 
      //         <TableBody {...getTableBodyProps()}> {rows.map(row => { prepareRow(row); 
      //         return ( <TableRow {...row.getRowProps()}> {row.cells.map(cell => ( 
      //         <TableCell {...cell.getCellProps()}> {cell.render('Cell')} </TableCell> ))} 
      //         </TableRow> ); })} </TableBody> </Table> </TableContainer> </div> ); }