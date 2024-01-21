import React, { useEffect, useState } from 'react'

// MUI parts
import { Box, Drawer, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios';

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
                <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/'}>صفحه اصلی</Link></li>
                <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/events'}>رویدادها</Link></li>
                <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/classes'}>کلاس‌ها</Link></li>
                <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/blog'}>بلاگ</Link></li>
                <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/success'}>موفقیت دانشجویان</Link></li>
                <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/contact'}>تماس با ما</Link></li>
                {
                  userId ? 
                    <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/dashboard'}>داشبورد</Link></li>
                    :
                    <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/auth/login'}>ثبت نام و ورود</Link></li>
                }
              </ul>
            </Typography>
          </Box>
    </Drawer>
  )
}

export default SideBar
