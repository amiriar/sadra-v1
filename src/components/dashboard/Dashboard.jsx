import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserDashboard() {
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
            axios.get('http://localhost:3001/dashboard')
                .then(response => {
                const result = response.data;
                // setUserRole(role);
                console.log(result);
            })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, []); 

    return (
        <div>
            <h1>{userRole === 'error' ? 'An error occurred.' : `Welcome to the ${userRole} dashboard!`}</h1>
        </div>
    );
}

export default UserDashboard;
