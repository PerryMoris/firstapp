import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import api from "../api";


export default function TaskCard({projectId}) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get(`/api/stasks/${projectId}/`)
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'project_name', headerName: 'Project', width: 130 },
        { field: 'task', 
            headerName: 'Task', 
            width: 160 ,
            autoHeight : true,
            autosizeOnMount: true,
            flex: 1,
        },
        {
          field: 'notes',
          headerName: 'Notes',
          width: 160,
          autosizeOnMount: true,
           autoHeight : true,
           flex: 1,
        },
        {
          field: 'challenges',
          headerName: 'Challenges',
          width: 160,
          autoHeight : true,
          autosizeOnMount: true,
          flex: 1,
        },
        {
            field: 'user_name',
            headerName: 'Staff',
            width: 100,
            wrapText: true ,
            flex: 1,
          },
        {
          field: 'created_at',
          headerName: 'Created On',
          width: 160,
          flex: 1,
        },
       
      ];
    
  return (
    <div className='pagemargin'>
    <h2>Task activities from all Staff</h2>
    <div className='Tablestyle'>
      <DataGrid
        rows={notes}
        columns={columns}
        getRowHeight={() => 'auto'}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className="custom-datagrid"
      />
    </div>
    </div>
  );
}
