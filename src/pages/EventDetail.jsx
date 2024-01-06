import React, { useState , useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// Styles
import './EventDetailStyle.css';
import { Card, Typography } from '@mui/material';
// icons
import { IoIosArrowBack } from "react-icons/io";
// DB
import EventDb from '../utils/EventDb.json';


const EventDetail = () => {
 const {id} = useParams();
 const eventdetailId = parseInt(id , 10);
 const findData = EventDb.tutorilEvent[1].EventsData;
 const data = findData.find((item) => item.id === eventdetailId);
 const TimeData = data.time
 const CardDirection = data.cardName;
 const CardDirection1 = EventDb.tutorilEvent[1].title;
 console.log(data)

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
        <div className='DetailOne'>
            <div className='DetailTextRight'>
                <h1>چه چیزی یاد می‌گیریم؟</h1>
                <p>تحقیقات مبانی ({CardDirection}) </p>
            </div>
        </div>
    </div>

</div>
  )
}

export default EventDetail
