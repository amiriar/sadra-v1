import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDashboard from './user/UserDashboard';
import TeacherDashbaord from './teacher/TeacherDashboard';
import AdminDashboard from './admin/AdminDashboard';

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

    return (
        <div>
            {
                userRole === "user" ? 
                    <UserDashboard userId={userId} userEmail={userEmail} userRole={userRole} />
                : userRole === "teacher" ?
                    <TeacherDashbaord userId={userId} userEmail={userEmail} userRole={userRole} />
                : userRole === "admin" ?
                    <AdminDashboard userId={userId} userEmail={userEmail} userRole={userRole} />
                :
                <h1>Login First</h1>
            }
        </div>
    );
}

export default DashboardHandler;