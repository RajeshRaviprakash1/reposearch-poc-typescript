import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { IRepoModel } from '../../models/IRepoModel';
import { Owner } from '../../models/IRepoModel';
import { json } from 'stream/consumers';


export function Grid({repos}: any)
{
    const navigate = useNavigate();
    const viewClicked = (params : any) =>
    {
        const jsonData1: IRepoModel[] = repos;
        let newrepo;

        jsonData1.map(item => item.full_name === params.value ? newrepo = item : '');

        navigate("/details",{state : {repoItem: newrepo}}) 
           
    }
   
    const columns = [ {headerName: 'Name', field:'full_name', sortable: true},
                        {headerName: 'Description', field:'description', sortable: true},
                        {headerName: 'Owner', field:'owner.login', sortable: true},
                        {headerName: 'Created on', field:'created_at', sortable: true},
                        {headerName: 'Modified on', field:'updated_at', sortable: true},
                        {headerName: "Action", field:"full_name", cellRenderer: (field: any) => {
                            return  <div>
                                <button onClick={() => viewClicked(field)}>View</button>
                            </div>;
                        } }
                    ]
    return(<div className='ag-theme-alpine' style={{marginLeft:'20px', marginRight:'20px', height: "50vh", flex:1}}>
                <AgGridReact rowData={repos} 
                columnDefs={columns} 
                pagination={true}
                paginationPageSize={10}
                />
        </div>)
}