import React, { useState , useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// Styles
import './EventDetailStyle.css';
import axios from 'axios';
// Components

// Icons
import { FaChevronLeft } from "react-icons/fa";

const EventDetail = () => {
const {id} = useParams();
const eventdetailId = parseInt(id , 10);

const [eventDetailData , setEventDetailData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:3001/eventsDetail/data');
          const jsonData = response.data;
          setEventDetailData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  fetchData();
}, []);

const data = eventDetailData && eventDetailData.find((item) => item.id === eventdetailId) ;
console.log(data);

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
    <>
      <div className='Details' dir='rtl'>
        <div className='HeadDetail'>
          <div>
            <p style={{ display:"flex", alignItems:"center"}}><span style={{color:"#98A2B3"}}>{data?.category}</span> &nbsp; <FaChevronLeft color='#FFF' /> &nbsp; <span style={{color:"#FFF"}}>{data?.title}</span></p>
          </div>
          <div className='HeadDetailData'>
            <h1 style={{color:"#F9F9F9"}}>{data?.title}</h1>
            <p style={{color:"#E0E0E0"}}>{data?.detailSubtitle}</p>
          </div>
          <div className='timeLeft'>
            <div className='timerStyle'>
              <p>17</p>
              <p style={{color:"#E0E0E0", fontSize: '1rem'}}>ثانیه</p>
            </div>
            <div className='timerStyle'>
              <p>44</p>
              <p style={{color:"#E0E0E0", fontSize: '1rem'}}>دقیقه</p>
            </div>
            <div className='timerStyle'>
              <p>22</p>
              <p style={{color:"#E0E0E0", fontSize: '1rem'}}>ساعت</p>
            </div>
            <div className='timerStyle'>
              <p>06</p>
              <p style={{color:"#E0E0E0", fontSize: '1rem'}}>روز</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventDetail
