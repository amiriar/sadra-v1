import React from 'react'

// MUI parts
import { Box, Drawer, Typography } from '@mui/material'

const SideBar = ({isOpen , setIsopen}) => {
  return (
    <Drawer anchor='left' open={isOpen} onClose={()=> setIsopen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component="div">

            <ul style={{marginTop : 150}} >
                <li style={{margin : 30}}>صفحه اصلی</li>
                <li style={{margin : 30}}>رویدادها</li>
                <li style={{margin : 30}}>کلاس‌ها</li>
                <li style={{margin : 30}}>تماس با ما</li>
            </ul>

            </Typography>
          </Box>
       </Drawer>
  )
}

export default SideBar
