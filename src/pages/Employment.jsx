import React, { useEffect, useState } from 'react'
// Styles
import './Employment.css'
// Components
import Line from '../components/modules/Line'
import EmploymentDetailCard from '../components/modules/EventDetailModule/EmploymentDetailCard'
import VideoComponent from '../components/modules/succes-modules/VideoComponent'
import QuestionIcon from '../components/layouts/svg/QuestionIcon'
import StudentCard from '../components/modules/succes-modules/StudentCard'
// export {Table , GrowArrow , PowerIcon , PersonWithHeart}
import {Table , GrowArrow , PowerIcon , PersonWithHeart} from '../components/layouts/svg/EmploymentIcon'
// Mui
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
// DataBase
import WhysUsDB from '../utils/WhysUsDB.json'
import Questions from '../utils/Questions.json'
const Employment = () => {
  const [value, setValue] = React.useState(1);
  const [tabHeader , setTabheader] = useState([
    {
      id : 1 ,
      TabTitle : "همه"
    }
    ,
    {
      id : 2 ,
      TabTitle : "محصول"
    }
    ,
    {
      id : 3 ,
      TabTitle : "آموزش"
    }
    ,
    {
      id : 4 ,
      TabTitle : "مارکتینگ"
    }
    ,
    {
      id : 5 ,
      TabTitle : "منابع انسانی"
    }
    ,
    {
      id : 6 ,
      TabTitle : "مالی"
    }
  ])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data , setData] = useState([]);
  const [data2 , setData2] = useState([]);
  useEffect(()=> {
    setValue(2)
    const fetchData = async () => {
      try {
          const response = await fetch('http://localhost:3001/employment/data');
          const jsonData = await response.json();
          setData(jsonData);
          const Response2 = await fetch('http://localhost:3001/jobTeam/data');
          const CardData = await Response2.json();
          setData2(CardData)
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData();
  } , [])

  return (
    <div className='Employment_container'>
      <div className='Employment_Head'>
        <h1>همکاری با صدرا</h1>
        <p>صدرا، بستری قدرتمند از جنس خلق و تحول است و به افرادی که به فراتر از خود متعهدند، فرصت می‌دهد که «حرفه‌ای‌ترین و تاثیرگذارترین» نسخه خود را خلق کنند و آن را کار و زندگی کنند.</p>
      </div>

      <div className='OurValue'>
        <div className='OurValieIconHead'>
        <Line/> <h2>ارزش‌های ما</h2>
        </div>

    <div className='OurValue_Detail'>
            <h2 id="textMB">جایی که هم باعث رشد خودت میشی، هم دیگران</h2>
            <p>صدرا، محیطی رو فراهم کرده تا از توانایی‌ها و ویژگی‌هایی که شما رو نسبت به مدرسان دیگه، برتر میکنه به بهترین شکل مورد استفاده قرار بگیره تا شما هم به بهترین شکل ممکن این توانایی‌ها رو در اختیار دیگران قرار بدید و مسیر پیشرفت‌شون رو هموار کنی و  میتونی توانایی‌هات رو بهبود بدی و بهترین نسخه خودت باشی.اینجا همون سرزمین فرصت‌هاست!</p>

        <div className='Icons'>
            <ul className='iconUnorderedList'>
                <li><Table/>نتیجه گرایی</li>
                <li><GrowArrow/>پیشرفت مداوم</li>
                <li><PowerIcon/>قدرت‌ بخشی</li>
                <li><PersonWithHeart/>احترام همیشگی</li>
            </ul>
        </div>

    </div>


      </div>

      <div className='Chance_container'>
        <div className='ChanceIcon'>
          <Line/><h2>فرصت‌های شغلی</h2> 
        </div>

        <h2>فرصت‌هایی برای رسیدن به رویاهای خود</h2>

        <div className='Tabs_job_chances'>
    <Box fontFamily={"Yekan , sans-serif"} sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList fontFamily={"Yekan , sans-serif"} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" }}}>
            {tabHeader.map(item => <Tab key={item.id}  fontFamily={"Yekan , sans-serif"} label={item.TabTitle} value={item.id} />)}
          </TabList>
        </Box>
        {
          tabHeader.map(Tab => (
            <TabPanel key={Tab.id} value={Tab.id}>
            <div className='JonsCardsContainer'>
            

              {
                Tab.TabTitle === "همه" ? data.map(item =><EmploymentDetailCard key={item.id} job={item.jobTitle} place={item.jobPlace} category={item.jobCategory} time={item.jobTime} />) :
                data.filter((item) => item.jobCategory === Tab.TabTitle).map((filteredItem) => (
                  <EmploymentDetailCard key={filteredItem.id} job={filteredItem.jobTitle} place={filteredItem.jobPlace} category={filteredItem.jobCategory} time={filteredItem.jobTime} />
              ))
              }      
            </div>    
            </TabPanel>
            ))
        }
      </TabContext>
    </Box>
        </div>

      <div className='whyUs_container'>
        <div className='ChanceIcon'>
        <Line/><h2>چرا ما</h2> 
        </div>

          <h2>صدرا از نگاه همکاران</h2>

        <div className='VideoContents'>
          
          {
            WhysUsDB.map(item => (
            <div key={item.id} className='videoContainer'><VideoComponent key={item.id} UrlAutorName={item.authorName} video={item.video} /></div>

            ))
          }
        </div>

      </div>


      <div className='Question_Container'>
        <div className='ChanceIcon'>
          <Line/><h2>سوال‌های پرتکرار</h2> 
        </div>


        <div className='Questions'>

        {
        Questions.map(item => (
          <Accordion>
          <AccordionSummary
          expandIcon={<QuestionIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          key={item.id}
        >
        <Typography>{item.title}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            {item.question}
          </Typography>
        </AccordionDetails>
      
        </Accordion>

        ))
      }
    </div>
      
      </div>

      <div>
        <h1>اعضای تیم جذب و استخدام</h1>
        <div>
    
          <Grid container spacing={2} >
              {data2.map((item) => (
                  <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
                    <StudentCard student={item} account={item.account}  accountLink={item.accountLink}  />
                  </Grid>
              ))}
          </Grid>
        </div>
        <div>
          
        </div>
      </div>

    </div>
    </div>
  )
}

export default Employment
