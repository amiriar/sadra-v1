import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton'
import DashboardCard from '../DashboardCard';

//icons
import { FaMicroblog } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";


function TeacherDashbaord({ userRole }) {

    const categories = [
        {title:'داشبورد' , link:"/dashboard"},
        {title:'بلاگ ها', link:"/dashboard/blogs"},
        {title:'رویداد ها', link:"/dashboard/events"},
        {title:'کلاس ها', link:"/dashboard/classes"},
    ]

    return (
        <>
        {
            userRole === "teacher" ?
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
                    <div className="cards-container">
                        <DashboardCard icon={<FaMicroblog size={40} />} title={'بلاگ ها'} link={'/dashboard/blogs'} />
                        <DashboardCard icon={<MdEvent size={40} />} title={'رویداد ها'} link={'/dashboard/events'} />
                        <DashboardCard icon={<SiGoogleclassroom size={40} />} title={'کلاس ها'} link={'/dashboard/classes'} />
                    </div>
                </div>
            </div>
            :
            <h2>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h2>
        }
        </>
    );
}

export default TeacherDashbaord