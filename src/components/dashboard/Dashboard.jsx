import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserDashboard() {
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard/token', {withCredentials: true})
            .then(response => {
            const { email, role, id } = response.data;
            setUserId(id);
            setUserEmail(email);
            setUserRole(role);
        })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        setUserRole('error');
    });
    }, []); 

    return (
        <div>
            <h1>id: {userId}</h1>
            <h1>email: {userEmail}</h1>
            <h1>role: {userRole}</h1>
        </div>
    );
}

export default UserDashboard;
