import React, { useEffect } from 'react'
// Styles
import './Employment.css'
// Components
import Line from '../components/modules/Line'
import EmploymentDetailCard from '../components/modules/EventDetailModule/EmploymentDetailCard'
import VideoComponent from '../components/modules/succes-modules/VideoComponent'
import QuestionIcon from '../components/layouts/svg/QuestionIcon'
import JobTeamCard from '../components/modules/Employment-modules/JobTeamCard'
// Icons
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// DataBase
import CareerOpportunities from '../utils/CareerOpportunities.json'
import WhysUsDB from '../utils/WhysUsDB.json'
import Questions from '../utils/Questions.json'
import JobTeam from '../utils/JobTeam.json'
const Employment = () => {
  const [value, setValue] = React.useState(1);
  const DB = CareerOpportunities
  const JobData = CareerOpportunities[0].opportunities
//   console.log(JobData)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=> {
    setValue(1)
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
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" }}}>
            <Tab label="همه" value="1" />
            {CareerOpportunities.map(item => <Tab label={item.joMainBranch} value={item.id} />)}
          </TabList>
        </Box>

        <TabPanel value="1">همه</TabPanel>

        {DB.map(item=> (
            <TabPanel value={item.id}><div className='JonsCardsContainer'>{item.opportunities.length ? item.opportunities.map(item => <EmploymentDetailCard job={item.job} place={item.place} category={item.category} time={item.time} />) : <h1>error no job found </h1>}</div></TabPanel>
        ))}      

       
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
             <div className='videoContainer'><VideoComponent key={item.id} UrlAutorName={item.authorName} video={item.video} /></div>

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

      <div className='TeamContainer'>
        <h1>اعضای تیم جذب و استخدام</h1>
        <div className='Cardss'>
          {
            JobTeam.map(item => (
              <JobTeamCard key={item.id} {...item} />
            ))
          }
        </div>
        <div>
          
        </div>
      </div>

     </div>
    </div>
  )
}

export default Employment
