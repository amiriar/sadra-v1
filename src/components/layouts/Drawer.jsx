import React from 'react'

// MUI parts
import { Box, Drawer, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const SideBar = ({isOpen , setIsopen}) => {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  return (
    <Drawer anchor='left' open={isOpen} onClose={()=> setIsopen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component="div">

            <ul style={{marginTop : 150}} >
              <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/'}>صفحه اصلی</Link></li>
              <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/events'}>رویدادها</Link></li>
              <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/classes'}>کلاس‌ها</Link></li>
              <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/blog'}>بلاگ</Link></li>
              <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/contact'}>تماس با ما</Link></li>
              {
                isAuthenticated ?
                <li style={{margin: 30}}><p style={{color:"#212121", fontFamily:'Yekan, sans-serif', cursor:"pointer"}} onClick={() => logout()}>خروج</p></li>
                :
                <li style={{margin: 30}}><p style={{color:"#212121", fontFamily:'Yekan, sans-serif', cursor:"pointer"}} onClick={() => loginWithRedirect()}>ثبت نام و ورود</p></li>
              }
            </ul>

            </Typography>
          </Box>
       </Drawer>
  )
}

export default SideBar
