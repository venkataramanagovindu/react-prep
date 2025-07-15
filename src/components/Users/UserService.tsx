
import React from 'react';
import axios from 'axios';
import { User } from './User';
export const getUsers = () => {
    return axios.get<User[]>(
        'http://localhost:5118/api/User'
    ).then(response => 
        {
            console.log("Users fetched from API:", response.data);
            return response.data
        }
    );
}