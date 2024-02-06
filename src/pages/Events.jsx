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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaMinus } from "react-icons/fa";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { CiSettings } from "react-icons/ci";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


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

const categories = [
  {
    id : 1 ,
    title : "UI/UX طراحی",
    quantity : 160
  }
  ,
  {
    id : 2 ,
    title : "Graphic طراحی",
    quantity : 90
  }
  ,
  {
    id : 3 ,
    title : "Game طراحی",
    quantity : 25
  }
  ,
  {
    id : 4 ,
    title : "Front-End",
    quantity : 5
  }
  ,
  {
    id : 5 ,
    title : "Back-End" ,
    quantity : 20
  }
  ,
  {
    id : 6 ,
    title : "Data Science",
    quantity : 65
  }

]

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
    setValue("1")
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
      {TabHeaders.map(item => <Tab key={item.id} sx={{fontFamily:"Yekan, sans-serif"}} label={`${item.title}`} value={item.id.toString()} />)}
      </TabList>
    </Box>

    {/* {
      TabHeaders.map((Tab) => (
        <TabPanel key={Tab.id} value={Tab.id.toString()} >
          <div key={Tab.id} className='event_card_info'>
                {
                  data.filter((item)=> item.category === Tab.title).map((item)=>(
                    <Link key={item.id} to={`/events/${item.id}`}><EventCar key={item.id} {...item} /></Link>
                  ))
                }
          </div>
        </TabPanel>
      ))
    } */}
    <div className='event_card_info'>
    <Link to={`/events/1`} ><EventCar thumbnail={"/assets/thumbnail1.jpg"} videoSrc={"/assets/Media.mp4"} description4={"راحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد"} title_description4={"هدف نهایی"} description3="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون مع" title_description3={"داستان این اموزش"} description2={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description2={"هدف اموزش"} description1={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description1={"این دوره دوره کامل و جامع هست"} Detail_Head_Title={"مبانی اموزش"} category="help" title={"دوره html"} image={"/assets/blog-images/9.jpeg"} price={"300"} time={"18 00 00"} teacher={"ابرونی"} date={"06/02/2024"} /></Link>
    <Link to={`/events/2`} ><EventCar thumbnail={"/assets/thumbnail1.jpg"} videoSrc={"/assets/Media.mp4"} description4={"راحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد"} title_description4={"هدف نهایی"} description3="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون مع" title_description3={"داستان این اموزش"} description2={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description2={"هدف اموزش"} description1={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description1={"این دوره دوره کامل و جامع هست"} Detail_Head_Title={"مبانی اموزش"} category="help" title={"دوره JavaScript"} image={"/assets/blog-images/7.jpeg"} price={"800"} time={"7 00 00"} teacher={"ابرونی"} date={"06/02/2024"} /></Link>
    <Link to={`/events/3`} ><EventCar thumbnail={"/assets/thumbnail1.jpg"} videoSrc={"/assets/Media.mp4"} description4={"راحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد"} title_description4={"هدف نهایی"} description3="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون مع" title_description3={"داستان این اموزش"} description2={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description2={"هدف اموزش"} description1={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description1={"این دوره دوره کامل و جامع هست"} Detail_Head_Title={"مبانی اموزش"} category="help" title={"دوره css"} image={"/assets/blog-images/5.jpeg"} price={"400"} time={"12 00 00"} teacher={"ابرونی"} date={"06/02/2024"} /></Link>
    </div>


  </TabContext>
</Box>


</div>
<div>
</div>


{/* Mobile  */}

  <div className='MobileFilter'>
  <button onClick={mobileSetting}> <CiSettings style={{width : 30 , height : 30 , color : "white"}} /></button>
  </div>

  <div className={setting ? "mobileS_active" : "mobileS_de"}>
    <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >دسته‌ بندی‌ ها</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {categories.map(Category=>(
              <li className='ListItems'>
                <span> <Checkbox {...label} color="success" /> <span>({Category.quantity}) {Category.title}</span></span>
              </li>
            ))
            }
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >قیمت</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رایگان</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>تخفیف‌دار ها</span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >زمان</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای آینده</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای گذشته </span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>
          </Box>
       </Drawer>
    </div>


  
  {/* Mobile  */}
  <div className='FilterContainer'>

      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >دسته‌ بندی‌ ها</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {categories.map(Category=>(
              <li className='ListItems' key={Category.item} >
                <span> <Checkbox {...label} color="success" /> <span>({Category.quantity}) {Category.title}</span></span>
              </li>
            ))
            }
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >قیمت</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رایگان</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>تخفیف‌دار ها</span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >زمان</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای آینده</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای گذشته </span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>


  </div>
  

</div>   
</div>

  )
}

export default Events
