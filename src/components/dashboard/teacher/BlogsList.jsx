import React, { useEffect, useState } from 'react'
import SignOutButton from '../SignOutButton'
import { Link } from 'react-router-dom'
import axios from 'axios';

function BlogsList() {
    const categories = [
        {title:'داشبورد' , link:"/dashboard"},
        {title:'بلاگ ها', link:"/dashboard/blogs"},
        {title:'رویداد ها', link:"/dashboard/events"},
        {title:'کلاس ها', link:"/dashboard/classes"},
    ]
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard/token', {withCredentials: true})
            .then(response => {
            const { email, role, id } = response.data;
            setUserRole(role);
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, []); 

    return (
        <>
        {
            userRole === "teacher" ?
                <div className='userPanel' dir='rtl'>
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
                        
                    </div>
                </div>
            :
            <h2>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h2>
        }
        </>
    )
}

export default BlogsList