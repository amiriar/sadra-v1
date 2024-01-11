import React, { useEffect, useState } from 'react'

// Components
import SearchBox from '../components/modules/SearchBox'
import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EventCar from '../components/modules/EventModules/EventCard';
import MenuIcon from '../components/layouts/svg/MenuIcon';
import MobileSettingIcon from '../components/layouts/svg/MobileSettingIcon';
// import { Box, Drawer, Typography } from '@mui/material'
import { Drawer, Typography } from '@mui/material'


// Styles
import './Events.css'

// DB
import { RenderCategory } from '../components/modules/HomePageModule/CardPopTuData';

import { Link } from 'react-router-dom';

const Events = () => {
  const [status , setStatus] = useState(true)
  const [status2 , setStatus2] = useState(true)
  const [status3 , setStatus3] = useState(true)
  const [setting , setSetting] = useState(false)
  const [value, setValue] = React.useState('1');
  const [TabHeaders , setTabHeaders] = useState([
    {
      id : 1 ,
      title : "رویدادها"
    }
    ,
    {
      id : 2 ,
      title : "دوره ها"
    }
    ,
    {
      id : 3 ,
      title : "مدرس‌ها"
    }
    
  ])

const [popularEvent , setPopularEvent] = useState([
  {
      id : 1 ,
      title : "UI Design"
  }
  ,
  {
      id : 2 ,
      title : "UX Design"
  } 
  ,
  {
      id : 3 ,
      title : "Front-end"
  }
])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const statusHandler = ()=>{
    setStatus(e => !e)
  }

  const statusHandler2 = ()=>{
    setStatus2(e => !e)
  }

  const statusHandler3 = ()=>{
    setStatus3(e => !e)
  }

  const mobileSetting = ()=>{
    setSetting(e => !e);
  }


  const [data , setData] = useState([]);
  useEffect(()=> {
    setValue(1)
    const fetchData = async () => {
      try {
          const response = await fetch('http://localhost:3001/events/data');
          const jsonData = await response.json();
          setData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData();
  } , [])
  
  return (
    <div className='eventContainer'>
      <div className='eventHeader'>
        <h1>رویدادهای صدرا</h1>
        <p>صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند. </p>
        <SearchBox dir="ltr" />
        <span id='popStyle'> {popularEvent && popularEvent.map((item , index) => <span key={index} >{`${item.title} , `}</span> )} : محبوب‌ها</span>
      </div>

    <div className='eventBody'>
      <div className='tutorialBox'>


<Box sx={{ width: '100%', typography: 'body1' , direction : "rtl" }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList  variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" }}} onChange={handleChange}>
      {TabHeaders.map(item => <Tab sx={{fontFamily:"Yekan, sans-serif"}} label={`${item.title}`} value={item.id} />)}
      </TabList>
    </Box>

    {
      TabHeaders.map((Tab) => (
        <TabPanel value={Tab.id} key={Tab.id}>
          <div className='event_card_info'>
                {
                  data.filter((item)=> item.category === Tab.title).map((item)=>(
                    <Link to={`/events/${item.id}`}><EventCar key={item.id} {...item} /></Link>
                  ))
                }
          </div>
        </TabPanel>
      ))
    }


  </TabContext>
</Box>


    </div>


      <div className='search_container'>

      {/* Sorting */}
      <div id='text'>
        <button onClick={statusHandler} id='menu_Btn' ><MenuIcon/></button>
        <p>دسته‌بندی‌ ها</p>
      </div>

      <div className={status ? "sortActive" : "sortDeactive"}>
          <ul>
            {
              RenderCategory.map((item , index)=>(
                <li className='searchItem'>
                  <label className='container'>
                  <span id='lable_text'>({item.quantity})</span><span id='lable_text' dir='rtl'>{item.CatTitle}</span>
                  <input type="checkbox"  />
                  <span className="checkmark"></span>
                  </label>
                </li>
              ))
            }
          </ul>
      </div>

      <div className='prices'>
      <div id='text'>
        <button onClick={statusHandler2} id='menu_Btn' ><MenuIcon/></button>
        <p>قیمت</p>
      </div>

      <div className={status2 ? "sortActive" : "sortDeactive"}>
          <ul>
            <li className='searchItem'>
              <label className='container'>
              <p id='lable_text'>(18) رایگان</p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
              </label>
            </li>
            <li className='searchItem'>
              <label className='container'>
              <p id='lable_text'>(0) تخفیف‌دارها</p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
              </label>
            </li>
          </ul>
      </div>
    </div>

  <div className='times'>
      <div id='text'>
        <button onClick={statusHandler3} id='menu_Btn' ><MenuIcon/></button>
          <p>زمان</p>
        </div>
    <div className={status3 ? "sortActive" : "sortDeactive"}>
          <ul>
            <li className='searchItem'>
                <label className='container'>
                  <p id='lable_text'>(18) رویدادهای آینده</p>
                  <input type="checkbox"  />
                  <span className="checkmark"></span>
                </label>
            </li>
            <li className='searchItem'>
                <label className='container'>
                  <p id='lable_text'>(18) رویدادهای گذشته </p>
                  <input type="checkbox"  />
                  <span className="checkmark"></span>
                </label>
            </li>
          </ul>
    </div>
  </div>
</div>


    <button onClick={mobileSetting} id='mobile_setting'><MobileSettingIcon/></button>
    <div className={setting ? "mobileS_active" : "mobileS_de"}>
    <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component="div">
            <ul>
            {
              RenderCategory.map((item , index)=>( 
              <li className='searchItem'>
              <label className='container'>
              <p id='lable_text'>({item.quantity} ) { item.CatTitle}  </p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
              </label>
              </li>
                  
              ))
            }
          </ul>


        <ul>
          <li className='searchItem'>
              <label className='container'>
              <p id='lable_text'>(18) رایگان</p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
              </label>
          </li>

          <li className='searchItem'>
              <label className='container'>
              <p id='lable_text'>(18) تخفیف‌دارها</p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
              </label>
          </li>
        </ul>   


        <ul>
          <li className='searchItem'>
              <label className='container'>
                <p id='lable_text'>(18) رویدادهای آینده</p>
                <input type="checkbox"  />
                <span className="checkmark"></span>
              </label>
          </li>
          <li className='searchItem'>
              <label className='container'>
                <p id='lable_text'>(18) رویدادهای گذشته </p>
                <input type="checkbox"  />
                <span className="checkmark"></span>
              </label>
          </li>
        </ul>

            </Typography>
          </Box>
       </Drawer>
    </div>

</div>   
</div>

  )
}

export default Events
