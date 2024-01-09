import React, { useState , useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// Styles
import './EventDetailStyle.css';
import { Button, Card, Typography } from '@mui/material';
// icons
import { IoIosArrowBack } from "react-icons/io";
import GreenLine from '../components/layouts/svg/GreenLine';
import GreenDot from '../components/layouts/svg/GreenDot';
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
// DB
import EventDb from '../utils/EventDb.json';
// Component
import VideoPlayer from '../components/modules/VideoPlayer'
import EventDetailTeacherCard from '../components/modules/EventDetailModule/EventDetailTeacherCard';

const EventDetail = () => {
 const {id} = useParams();
 const eventdetailId = parseInt(id , 10);
 const findData = EventDb.tutorilEvent[1].EventsData;
 const data = findData.find((item) => item.id === eventdetailId);
 const TimeData = data.time;
 const CardDirection = data.cardName;
 const CardDirection1 = EventDb.tutorilEvent[1].title;
 const descriptiontitleCard = data.descriptiontitleCard
 const CardImage = data.thumbnail
 const CardMaster = data.Master
 const CardPrice = data.price
 const teachers = data.teachers
// Method two
//  const CardData = EventDb.tutorilEvent[1];
//  const TimeData = CardData.EventsData[id - 1].time;
//  const CardDirection = CardData.EventsData[id - 1].cardName;
//  const CardDirection1 = CardData.title;



  const [timerDays , setTimerDays] = useState("00");
  const [timerHours , settimerHours] = useState("00");
  const [timerMinuts , setTimerMinuts] = useState("00");
  const [timerSecounds , setTimerSecounds] = useState("00");

//   let interval = useRef();

//   const startTimer = ()=> {
//    const countdownDate = new Date(`${TimeData.month} ${TimeData.day} , ${TimeData.year} ${TimeData.hour}:${TimeData.minuts}:${TimeData.secounds}`).getTime()
    
//     interval = setInterval(()=> {
//         const now = new Date().getTime()
//         const distance = countdownDate - now

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24))
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
//         const minuts = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
//         const secounds = Math.floor((distance % (1000 * 60)) / 1000)
        
//         if(distance < 0){
//             // time stoper
//             clearInterval(interval.current)
//         }else {
//             setTimerDays(days)
//             settimerHours(hours)
//             setTimerMinuts(minuts)
//             setTimerSecounds(secounds)
//         }

//     } , 1000)
//   }
  
// // when site loaded
//   useEffect(()=> {
//     startTimer()
//     return () => {
//      clearInterval(interval.current)
//     }
//   } , [])



  return (
<div className='Events_container'>
    <div className='Head_container'>
      <span className='direction'><span id='lessColor'>{CardDirection1}</span> <IoIosArrowBack/> <span id='pain'>{CardDirection}</span> </span>
     <div className="head_content">
      <Typography id="headH1" variant="h1" >اصول اساسی طراحی User Exprience</Typography>
      <Typography id="headParag">برای محصولات امروزی User Experience تاثیرگذاری در دنیای دیجیتال طراحی کنید. نمونه کارهایی بسازید که توانایی شما را در مسیر کشف مشکل کاربر و رسیدن به بهترین راه‌حل را نشان دهد.</Typography>
     </div>
     <div className='timer'>
        <div className='dayes_container'>
            <p className='timePara'>{timerDays}</p>
            <span className='timeSpan'>روز</span>
        </div>
        <div className='hour_container'>
            <p className='timePara'>{timerHours}</p>
            <span className='timeSpan'>ساعت</span>
        </div>
        <div className='minuts_container'>
            <p className='timePara'>{timerMinuts}</p>
            <span className='timeSpan' >دقیقه</span>
        </div>
        <div className='secound_container'>
            <p className='timePara'>{timerSecounds}</p>
            <span className='timeSpan'>ثانیه</span>
        </div>
     </div>
    </div>


    <div className='Event_detail_body'>

    <div className='DetailCardLeft'>
               <img src={CardImage} />
               <div className='cardDetail1'>
                <p>{CardMaster}</p>
                <span>
                   <span>{CardPrice}</span>
                   <span>هزار تومان</span>
                </span>
               </div>

            <Button variant="contained">همین حالا ثبت نام کن</Button>

            <div className='rendomLine'></div>

          <div className='cardDetailMore'>
                <h2>توضیحات رویداد</h2>
                <p>{descriptiontitleCard}</p>
            </div>

            <div className='moremoreDetail'>
                <h2>جزئیات رویداد</h2>
                
                <div className='Eventtime'>
                    <CiCalendar id='DateIcon' />
                   <span> {TimeData.year} </span>
                   <span> {TimeData.month} </span>
                   <span> {TimeData.day} </span>
                </div>

                <div className='EventtimeHour'>
                    <CiClock2 id='DateIcon' />
                   <span>{TimeData.hour}:{TimeData.minuts}</span> - <span>{TimeData.EndHour}:{TimeData.EndMinuts}</span>
                </div>
                
            </div>
          </div>
    
        <div className='DetailOne'>
        
          <div className='DetailTextRight'>
            <GreenLine/>
            <eventDetailGreenLine/>
                <h1>چه چیزی یاد می‌گیریم؟</h1>
             {/* <div className='Box_Text1'>
                
                <h2>{CardDirection} </h2>
                <p>{description2}</p>
             </div>
             <div className='Box_Text1'>
             <GreenDot/>
                <h2>{CardDirection} </h2>
                <p>{description3}</p>
             </div>
             <div className='Box_Text1'>
                <GreenDot/>
                <h2>{CardDirection} </h2>
                <p>{description4}</p>
             </div>
             <div className='Box_Text1'>
                <GreenDot/>
                <h2>{CardDirection} </h2>
                <p>{description5}</p>
             </div> */}

            {
                data.DescriptionsData.map(item =>(
                
                <div className='Box_Text1' key={item.id}>
                <GreenDot/>
                <h2>{CardDirection} </h2>
                <p>{item.description}</p>
                </div>
                
                ))
            }
          </div>
        </div>

             {/* Card */}

            <div className='videoContainer'>
                <div className='textContainer'>
                <h2>مروری بر دوره‌های پیشین</h2>
                </div>
                <VideoPlayer video={data.video} poster="" />
            </div>


            <div className='Teacher_container'>
                <h2>مدرسان دوره</h2>

                <div className='teachersBox'>
                    
                    {
                        teachers.map(item => (
                            <EventDetailTeacherCard key={item.id} {...item}/>
                        ))
                    }
                </div>
            </div>

    </div>

</div>
  )
}

export default EventDetail
