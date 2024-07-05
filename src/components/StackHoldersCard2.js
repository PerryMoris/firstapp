import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import api from "../api";


export default function StackHoldersCard2() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get(`/api/createstake/`)
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
        { field: 'name', 
            headerName: 'Name', 
            width: 160 ,
            autoHeight : true,
            autosizeOnMount: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 160,
          autosizeOnMount: true,
           autoHeight : true,
        },
        {
          field: 'position',
          headerName: 'Position',
          width: 160,
          autoHeight : true,
          autosizeOnMount: true,
        },
        {
            field: 'activity',
            headerName: 'Activity',
            width: 140,
            wrapText: true ,
          },
        {
          field: 'created_at',
          headerName: 'Created On',
          width: 160,
        },
       
      ];
    
  return (
    <div className='pagemargin'>
    <h2>Stackholders for the project</h2>
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
