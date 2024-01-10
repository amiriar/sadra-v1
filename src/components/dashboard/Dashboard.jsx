import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardHandler() {
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

    const navigate = useNavigate()

    if(userRole === "user"){
        console.log(userRole);
        navigate("/panel/user", { replace:true })
    }else if(userRole === "teacher"){
        console.log(userRole);
        navigate("/panel/teacher", { replace:true })
    }else if(userRole === "admin"){
        console.log(userRole);
        navigate("/panel/admin", { replace:true })
    }else{
        navigate("/")
    }
}

export default DashboardHandler;
