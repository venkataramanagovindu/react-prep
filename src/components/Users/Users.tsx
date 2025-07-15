import React, { useEffect } from "react";
import { getUsers } from "./UserService";

export const Users = () => {
  console.log("Users component rendered");

  useEffect(() => {

    getUsers().then(users => {
      console.log("Users from API:", users);
    }).catch(error => {
      console.error("Error fetching users:", error);
    });         
  }, []);

  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h1>Users Component</h1>
      <p>This is the Users component.</p>
    </div>
  );
}