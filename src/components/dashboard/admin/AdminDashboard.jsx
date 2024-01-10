import axios from 'axios';
import React, { useEffect } from 'react';

const AdminDashboard = () => {
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard/token', {withCredentials: true})
            .then(response => {
            console.log(response);
        })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        setUserRole('error');
    });
    }, []); 
    return (
        <div>
            AdminDashboard
        </div>
    );
};

export default AdminDashboard;