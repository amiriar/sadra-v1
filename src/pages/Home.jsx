import React, { useEffect, useState } from 'react'

// Styles 
import './Home.css';
import image from '/assets/manLaptop.png'
// Components
import SearchBox from '../components/modules/SearchBox';
import Line from '../components/modules/Line';
import VideoPlayer from '../components/modules/VideoPlayer';
import CardPopTu from '../components/modules/HomePageModule/CardPopTu';
import CardEvent from '../components/modules/HomePageModule/CardEvent';
// MUI 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@mui/material';
// Icons
import { Mokhaberat , Tapci } from '../components/layouts/svg/workingCorporate';
import Hamrah from '/assets/hamrahaval.png'
import { TiMessages } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
// Media
import Video from '/assets/Media.mp4'
import ContactSlider from '../components/modules/HomePageModule/ContactSlider';
import { contacts } from '../components/modules/HomePageModule/Contact';
import { Stack } from '@mui/system';
import { CardData , RenderCategory } from '../components/modules/HomePageModule/CardPopTuData';
import imageAbout from '/public/assets/image_about_us.png'
import {eventData} from '../components/modules/HomePageModule/EventsContent'
// Variabels

                  
const Home = () => {
  const [index , setIndex] = useState(0)
  const [people] = useState(contacts)
  const lastIndex = people.length - 1 ;
  const sliderHandler1 = (event)=> {
    if(index >= lastIndex ){
      setIndex(0)
      return ;
    }
    setIndex(e => e + 1)
  } 
  const sliderHandler2 = (event)=> {
    if(index <= 0 ){
      setIndex(lastIndex)
      return ;
    }
    setIndex(e => e - 1)

  } 

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <>
    <div className='Home' id='maxWidth'>
        <div className='image_container'>
            <img src={image} alt={image} />
        </div>

        <div className='Data_Container' >
            <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
            <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
            <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
            <SearchBox firstWidth={'75%'}/>
        </div>
    </div>

    <div className='Home_corporations' id='maxWidth'>
        <p>فارغ التحصیلان دوره‌های ما، در . بهترین شرکت‌های کشور مشغول به کارند</p>
    <div className='companiese'>
        <Mokhaberat />
        <Tapci  />
        <Mokhaberat />
    </div>
    </div>

    {/* Why US */}

    <div className='why_Container' id='maxWidth'>
      <div className='why_us'>

        <div className='why_us_Icons' id='maxWidth'>
          <Line/>
          <h2>چرا ما</h2>
        </div>

        <h1>شرکت در دوره‌ها مساوی با ورود قطعی به بازار کار</h1>
        <p>صدرا، از متدهایی استفاده می‌کنه که مسیر یادگیری برای شما هموارتر می‌کنه و نیروی کاری تربیت می‌کنه که صدرا با افتخار به شرکت‌های موفق معرفی می‌کنه و اشتغال به کار شما رو، بعد از دوره تضمین می‌کنه.</p>
        
        <div className='Box_Container' >
          <div className='data_Box1'>
            <h1 style={{color : '#fff'}} >پشتیبانی بعد از اتمام دوره</h1>
            <p style={{color : '#fff'}}>اگر در طول دوره‌ یا بعد از اتمام آن مشکل دارید، امکان گفت و گو و رفع مشکل برای شما وجود دارد.</p>
            <CiCalendar className='Icon' />
          </div>


          <div className='data_Box2'>
            <h1 style={{color : '#fff'}}>دوره‌های آفلاین</h1>
            <p style={{color : '#fff'}}>اگر امکان شرکت در دوره‌های حضوری یا آنلاین را ندارید، امکان استفاده از ویدیوهای ضبط شده برای شما دوره‌ها وجود دارد.</p>
            <TiMessages className='Icon' />
          </div>
        </div>
      </div>    
    </div>

{/* part Three Media vidoe */}

    <div className='learn_container' id='maxWidth'>
      <div className='learn_icon'>
        <h2>آموزش ما</h2>
        <Line/>
      </div>

      <h1>استفاده از متدهای جدید آموزشی</h1>
      <p>صدرا، از استانداردها و چارچوب‌های سفارشی جدید آموزشی استفاده می‌کنه ترکیبی از ترکیبی از CSTA ،ISTE ،PBLو ADIF است که در حال حاضر در آمریکا و کانادا در حال اجراست و باعث سهولت در یادگیری دانشجویان و دانش‌آموزان شده و پیشرفت آن‌ها به وضوح، قابل رویت است.</p>
      <div className='Video_Container'>
        <VideoPlayer video={Video} poster={image} />
      </div>
    </div>

    <div className='Contact_slider' id='maxWidth'>
      <div className='success_container'>
        <h2>داستان‌های موفقیت</h2>
        <Line/>
      </div>

      <h1>بیش از 500 دانش‌آموخته از مسیر خود راضی بودند</h1>

      <div className='contact_container'>
      <button onClick={sliderHandler1}  id='contact_Btn1'><FaArrowLeft name='left' style={{color : "white" , width : 30  , height : 30 }} /></button>
      <ContactSlider index={index} />
      <button onClick={sliderHandler2}  name='right' id='contact_Btn2' ><FaArrowRight style={{color : "white" , width : 30  , height : 30 }} /></button>
      </div>

      <div className='contact_corporates'>
        <Tapci className="icons_contact"/>
        <Tapci className="icons_contact"/>
        <Tapci className="icons_contact"/>
      </div>
    </div>
    {/* Part Five */}

    <div className='popular_Tutorial' id='maxWidth'>
      <div className='popular_Icon'>
        <h2>دوره‌های محبوب</h2>
        <Line/>
      </div>

    <div className='data_pop_container'>
      <div className='Box_1'>
        <p>ما طیف وسیعی از دسته‌ها را برای کمک به شما در انتخاب دوره‌هایی که متناسب با تخصص شما هستند ارائه می‌کنیم. بیش از 100 دوره شما را از پایه راهنمایی می کند.</p>
      </div>

      <div className='Box_2'>
        <h1>بیش از 100 دوره‌ی فعال برای پیشرفت شما</h1>
      </div>
    </div>
    
    <Box  sx={{ minHeight : '602px' ,  width: '100%', typography: 'body1', direction : "rtl" , mt : "6rem"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" ,  }}} onChange={handleChange}>

            <Tab label={RenderCategory[0].CatTitle} value={RenderCategory[0].id.toString()} />
            <Tab label={RenderCategory[1].CatTitle} value={RenderCategory[1].id.toString()} />
            <Tab label={RenderCategory[2].CatTitle} value={RenderCategory[2].id.toString()} />
            <Tab label={RenderCategory[3].CatTitle} value={RenderCategory[3].id.toString()} />
            <Tab label={RenderCategory[4].CatTitle} value={RenderCategory[4].id.toString()} />
            <Tab label={RenderCategory[5].CatTitle} value={RenderCategory[5].id.toString()} />

            {/* {
              RenderCategory.map(item => {
              <Tab label={item.CatTitle} value={item.id.toString()} />
                console.log(item.id.toString())
              })
            } */}

          </TabList>
        </Box>
        <TabPanel value="1" >
        <div style={{display : "flex" , alignContent : "center" , justifyContent : "space-evenly" , flexWrap : "wrap"}}>
          {
            CardData.map((Item)=> <CardPopTu key={Item.id} {...Item}  />)
          }
        </div>

        <div className='more_btn_con'>
        <Button variant="outlined" sx={{ width : 150 , height : 45 , color : "#4CA773" , borderColor : "#4CA773" , borderRadius : 15}} >دوره‌های بیشتر</Button>
        </div>

        </TabPanel>
        <TabPanel value="2">طراحی UI/UX</TabPanel>
        <TabPanel value="3">طراحی گرافیک</TabPanel>
        <TabPanel value="4">
        <Stack backgroundColor="red" flexWrap="warp" spacing={20} direction="row">
          {
            CardData.map((Item)=> <CardPopTu key={Item.id} id={Item} {...Item}  />)
          }

        </Stack>
        </TabPanel>
        <TabPanel value="5">فرانت‌اند</TabPanel>
        <TabPanel value="6">بک‌اند</TabPanel>
      </TabContext>
      </Box>
    </div>
    <div className='mobile_reverse' id='maxWidth'>
        <div className='home_about_con'>
            <div className='about_image_con'>
              <div className='about_data'>
              <div>
                <h2>54M</h2>
                <p>دانش‌آموز در حال استفاده از این سامانه</p>
              </div>
              <div>
                  <h2>3.2K+</h2>
                  <p>دوره موجود در دسته‌بندی‌های مختلف</p>
              </div>
              <div>
                <h2>600</h2>
                <p>مربی مجرب که به شما آموزش می‌دهند</p>
              </div>
              </div>

            <div className='about_img_container'>
              <img src={imageAbout} alt='man' />
            </div>
          </div>
          <div className='about_text'>
            <div className='about_icons'>
              <h1>درباره  ما</h1>
              <Line/>
            </div>
            <h1>افزایش رشد فردی و تقویت استعداد شما</h1>
            <p>با بیش از یک دهه فعالیت زیرا همیشه می خواهیم خدمات آموزشی ارائه دهیم که در مدارس آموزش داده نمی شود.</p>
            <Button variant="outlined" sx={{ width : 150 , height : 45 , color : "#4CA773" , borderColor : "#4CA773" , borderRadius : 15}} >بیشتر بدانیم</Button>
          </div>

        </div>

    {/* part Seven  */}

        <div className='event_container'>
              <div className='event_icons'>
                <button><p><FaLongArrowAltLeft style={{margin : 12}} />رویدادهای بیشتر </p></button>
                <h2>رویدادهای آینده</h2>
              </div>

              <div className='event_card_data'>
                {
                  eventData.map((Item)=> <CardEvent key={Item.id} id={Item} {...Item}  />)
                }
              </div>
        </div>
    </div>
    </>
  )
}

export default Home
