import React, { useEffect, useState } from 'react'

// Styles 
import './Home.css';
import image from '/public/assets/manLaptop.png'
// Components
import SearchBox from '../components/modules/SearchBox';
import Line from '../components/modules/Line';
import VideoPlayer from '../components/modules/VideoPlayer';
// Icons
import { FaSearch } from "react-icons/fa";
import { Mokhaberat , Tapci } from '../components/layouts/svg/workingCorporate';
import Hamrah from '/public/assets/hamrahaval.png'
import { TiMessages } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// Media
import Video from '/public/assets/Media.mp4'
import ContactSlider from '../components/modules/HomePageModule/ContactSlider';
import { contacts } from '../components/modules/HomePageModule/Contact';
import { Stack } from '@mui/material';
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

  // useEffect(()=> {
  //   if(index > 3 ){
  //     setIndex(0)
  //     return ;
  //   }
 
  // } , [index , people])

  // useEffect(()=>{
  //   let slider = setInterval(() => {
  //     setIndex(index + 1)
      
  //   }, 500);
  //   return ()=> {
  //     clearInterval(slider)
  //   }
  // } , [index])

  return (
    <>
    <div className='Home'>
        <div className='image_container'>
            <img src={image} alt={image} />
        </div>

        <div className='Data_Container'>
            <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
            <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
            <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
            <SearchBox/>
        </div>
    </div>

    <div className='Home_corporations'>
        <p>فارغ التحصیلان دوره‌های ما، در . بهترین شرکت‌های کشور مشغول به کارند</p>
    <div className='companiese'>
        <Mokhaberat />
        <Tapci  />
        <Mokhaberat />
    </div>
    </div>

    {/* Why US */}

    <div className='why_Container'>
     <div className='why_us'>

      <div className='why_us_Icons'>
      <Line/>
      <h2>چرا ما</h2>
      </div>

      <h1>شرکت در دوره‌ها مساوی با ورود قطعی به بازار کار</h1>
      <p>صدرا، از متدهایی استفاده می‌کنه که مسیر یادگیری برای شما هموارتر می‌کنه و نیروی کاری تربیت می‌کنه که صدرا با افتخار به شرکت‌های موفق معرفی می‌کنه و اشتغال به کار شما رو، بعد از دوره تضمین می‌کنه.</p>
      
    <div className='Box_Container'>
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

    <div className='learn_container'>
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

    <div className='Contact_slider'>
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

    <div className='popular_Tutorial'>
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

    </div>

    </>
  )
}

export default Home
