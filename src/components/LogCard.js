import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import api from "../api";

export default function LogCard() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get(`/api/log/`)
            .then((res) => res.data)
            .then((data) => {
                const dataWithId = data.map((note, index) => ({ ...note, id: index }));
                setNotes(dataWithId);
                console.log(dataWithId);
            })
            .catch((err) => alert(err));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user_name', headerName: 'Staff', width: 130 },
        { field: 'change_message', headerName: 'Activity', width: 160, flex: 1 },
        { field: 'object_repr', headerName: 'Affected', width: 100, flex: 1 },
        { field: 'action_flag', headerName: 'Flag', width: 90, flex: 1 },
        { field: 'action_time', headerName: 'Time', width: 160, flex: 1 },
    ];

    return (
        <div className='pagemargin'>
            <h2>Recent activities from all Staff</h2>
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
                    slots={{
                        toolbar: GridToolbar,
                    }}
                />
            </div>
        </div>
    );
}
