import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import { Divider } from '@mui/material';

const categories = [
    {title:'داشبورد', link:"/dashboard"},
    {title:'اطلاعات',  link:"/dashboard/infos"},
    ]

function UserDashboard({ userId, userEmail, userRole }) {

    const navigate = useNavigate()

    const linkHandler = () => {
        navigate('/dashboard/infos')
    }

    return (
        <div className='userPanel'>
            <div className='sideBarPanel'>
                <div>
                    {
                        categories.map((item) => (
                            <Link key={item.title} to={item.link}>{item.title}</Link>
                        ))
                    }
                </div>
                <div>
                    <SignOutButton/>
                </div>
            </div>
            <div className='mainPanel'>
                <h1>با مراجعه به صفحه ی <span className='linkPanel' onClick={linkHandler}>اطلاعات</span> مشخصات خود را تکمیل کنید .</h1>
                <Divider/>
                <h2>اطلاعات شما :</h2>
                <h3>
                    ایمیل: {userEmail}
                </h3>
                <h3>
                    نقش کاربری شما: {userRole}
                </h3>
            </div>
        </div>
    );
}

export default UserDashboard