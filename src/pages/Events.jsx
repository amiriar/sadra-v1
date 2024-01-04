import React, { useEffect, useState } from 'react'

// Components
import SearchBox from '../components/modules/SearchBox'
import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EventCar from '../components/modules/EventModules/EventCar';
// Styles
import './Events.css'

// DB
import EventDb from '../utils/EventDb.json'

const Events = () => {
  const popularEvnet = EventDb.PopularEvent ;
  const TabData = EventDb.tutorilEvent ;
  
  const CardData = EventDb.tutorilEvent[1].EventsData
  
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(()=> {setValue("2")} , [])


  return (
    <div className='eventContainer'>
     <div className='eventHeader'>
       <h1>رویدادهای صدرا</h1>
       <p>صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند. </p>
       <SearchBox dir="ltr" />
       {/* populars */}
      <span id='popStyle'> {popularEvnet && popularEvnet.map((item , index) => <span key={index} >{`${item.title} , `}</span> )} : محبوب‌ها</span>
     </div>

    <div className='eventBody'>
      <div className='tutorialBox'>



    <Box sx={{ width: '100%', typography: 'body1' , direction : "rtl" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList   variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" }}} onChange={handleChange}>
            {TabData.map((item)=> (
              <Tab key={item.id} label={`${item.title } (${ item.quantity }) `} value={item.id.toString()} /> 
              
            ) )}
           
          </TabList>
        </Box>
        {/* <TabPanel value="1">pain</TabPanel>


        <TabPanel value="2" sx={{display : "flex" , flexWrap : "wrap"}}>
        {
           CardData.map(item => <EventCar key={item.id} {...item} /> )
        }
        </TabPanel>

        <TabPanel value="3">
          {!EventDb.tutorilEvent[2].EventsData && <h1>error</h1>}

        </TabPanel> */}

        {/* {
          EventDb.tutorilEvent.map((item) =><TabPanel key={item.id} value={item.id}>pain</TabPanel>)
        }
         */}

        
         {/* {
          EventDb.tutorilEvent.map((item , index) => (
            console.log(item)
          ))
         } */}

         {/* {console.log(!item.EventsData)} */}
          {/* {console.log(!item.EventsData ? console.log(item) : console.log("it fals"))} */}
         {
          EventDb.tutorilEvent.map((item , index) => (
            <TabPanel value={item.id.toString()}>
            <div className='event_card_info'>
              {item.quantity ? <h1 id='foundData'>{item.quantity} نتیجه یافت شد</h1> : <h1>هیج نتیجه ای یافت شد</h1> }
              <div>
                <p>مرتب‌سازی براساس:</p>
              </div>
            </div>
        <div className='EventCardCon'>
              {item.EventsData ? item.EventsData.map((item , index) => <EventCar key={item.id} {...item} /> ): <h1>error</h1>}
        </div>

            </TabPanel>
          ))
         }
      </TabContext>
    </Box>

    </div>


      <div className='search_container'>
        <h1>hello</h1>
      </div>

     </div>
     
    </div>
  )
}

export default Events
