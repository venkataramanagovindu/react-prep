import React, { Suspense, useEffect } from "react";
import { getUsers } from "./UserService";
import Button from '@mui/material/Button';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { User } from "./User";
import { LoaderContext, useLoader } from "../Loader/LoaderContext";

export const Users = () => {
  console.log("Users component rendered");
  const loader = useLoader()

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 200 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'username', headerName: 'Username', width: 300 },
    { field: 'age', headerName: 'Age', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
  ];
  
  const [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {
    loader.start('Fetching users...');
    console.log("Fetching users from API...");
    getUsers().then(usersData => {
      console.log("Users from API:", usersData);
      setUsers(usersData);
      
      loader.stop()
    }).catch(error => {
      console.error("Error fetching users:", error);
      loader.stop();
    });         
  }, []);

  return (
    <div >
      <h1>Users Component</h1>
      <p>This is the Users component.</p>

      <div>
    <Suspense fallback={<div>Loading users...</div>}>
      {/* This is where you can add any additional content or comments */}
      <h2>Users List</h2>
      <p>Here is a list of users fetched from the API:</p>
      <DataGrid rows={users} columns={columns} />
    </Suspense>
    </div>

      <Button variant="outlined">Hello world</Button>
      <Button variant="contained" color="primary">Click Me</Button>
    </div>
  );
}