import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { logout, isAuthenticated, user } = useAuth0()
    console.log(user);

    return (
        <div>
            {
                isAuthenticated ?
                <button className='login_Btn' style={{cursor:"pointer"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>خروج</button>
                :
                <h1>به صفحه اصلی برگرد</h1>
            }
            <p>name: {user?.name}</p>
            <p>nickname: {user?.nickname}</p>
            <img src={user.picture} alt="pic" style={{height:"200px", width:"250px"}} />
        </div>
    );
};

export default AdminDashboard;