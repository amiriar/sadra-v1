import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { logout, isAuthenticated } = useAuth0()
    const navigate = useNavigate()
    return (
        <div>
            {
                isAuthenticated ?
                <button className='login_Btn' onClick={() => logout()}>خروج</button>
                :
                <h1>به صفحه اصلی برگرد</h1>
            }
        </div>
    );
};

export default AdminDashboard;