import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import api from "../api";


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
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'project', headerName: 'Project', width: 130 },
        { field: 'task', headerName: 'Task', width: 130 },
        {
          field: 'notes',
          headerName: 'Notes',
          width: 90,
        },
        {
          field: 'challenges',
          headerName: 'Challenges',
          width: 160,
        },
        {
          field: 'created_at',
          headerName: 'Created On',
          width: 160,
        },
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
      />
    </div>
  );
}