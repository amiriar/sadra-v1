import React, { useEffect, useState } from 'react'

// MUI parts
import { Box, Drawer, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios';

// Icons
import { IoIosHome } from "react-icons/io";
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";
import { GoDiscussionClosed } from "react-icons/go";
import { MdEmojiEvents } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";

const SideBar = ({isOpen , setIsopen}) => {

  const [userId, setUserId] = useState(null);
  useEffect(() => {
      axios.get('http://localhost:3001/dashboard/token', {withCredentials: true})
          .then(response => {
          const { id } = response.data;
          setUserId(id);
      })
      .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
          setUserRole('error');
      });
  }, []); 

  return (
    <Drawer anchor='left' open={isOpen} onClose={()=> setIsopen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component="div">
              <ul style={{marginTop : 150}} >
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/'}><IoIosHome style={{position : "absolute" , left : 10 , top : 7 }} /> صفحه اصلی </Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/events'}><MdOutlineEvent style={{position : "absolute" , left : 10 , top : 7 }} /> رویدادها</Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/classes'}><MdOutlineClass style={{position : "absolute" , left : 10 , top : 7 }} /> کلاس‌ها</Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/blog'}><GoDiscussionClosed style={{position : "absolute" , left : 10 , top : 7 }} />بلاگ</Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/success'}><MdEmojiEvents style={{position : "absolute" , left : -18 , top : 7 , color : "gold" }} />موفقیت دانشجویان</Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/contact'}><IoCall style={{position : "absolute" , left : 10 , top : 7 }} /> تماس با ما</Link></li>
                {
                  userId ? 
                    <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/dashboard'}>داشبورد</Link></li>
                    :
                    <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/auth/login'}><IoMdLogIn style={{position : "absolute" , left : -5 , top : 8}} /> ثبت نام و ورود</Link></li>
                }
              </ul>
            </Typography>
          </Box>
    </Drawer>
  )
}

export default SideBar
