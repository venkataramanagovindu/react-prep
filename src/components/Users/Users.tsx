import React, { useEffect } from "react";
import { getUsers } from "./UserService";
import Button from '@mui/material/Button';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { User } from "./User";

export const Users = () => {
  console.log("Users component rendered");

//   const rows: GridRowsProp = [
//     { id: 1, name: 'Data Grid', description: 'the Community version' },
//     { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
//     { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
//   ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 200 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'username', headerName: 'Username', width: 300 },
    { field: 'age', headerName: 'Age', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
  ];
  
  const [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {

    getUsers().then(usersData => {
      console.log("Users from API:", usersData);
      setUsers(usersData);
      
    }).catch(error => {
      console.error("Error fetching users:", error);
    });         
  }, []);

  return (
    <div >
      <h1>Users Component</h1>
      <p>This is the Users component.</p>

      <div>
      <DataGrid rows={users} columns={columns} />
    </div>

      <Button variant="outlined">Hello world</Button>
      <Button variant="contained" color="primary">Click Me</Button>
    </div>
  );
}