import React from 'react'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import SearchBox from '../components/modules/SearchBox'
import ClassCard from '../components/modules/classes/ClassCard';
import EventCard from '../components/modules/EventModules/EventCard';
//css
import './Classes.css'

// Icons
import { IoGameControllerOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { CiPen } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { LuGitFork } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { BsCpu } from "react-icons/bs";
import { FaLongArrowAltLeft } from "react-icons/fa";



function Classes() {

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
            categorie : "Game Design" ,
            iconName : IoGameControllerOutline , 
        } ,
        {
            id : 2 ,
            categorie : "3D & Animation" ,
            iconName : LuBox , 
        } ,
        {
            id : 3 ,
            categorie : "Graphic Design" ,
            iconName : CiPen , 
        } ,
        {
            id : 4 ,
            categorie : "UI/UX Design" ,
            iconName : FiLayout , 
        } ,
        {
            id : 5 ,
            categorie : "IOT" ,
            iconName : LuGitFork , 
        } ,
        {
            id : 6 ,
            categorie : "Data Science" ,
            iconName : FiPieChart , 
        } ,
        {
            id : 7 ,
            categorie : "Back-End " ,
            iconName : GoDatabase , 
        } ,
        {
            id : 8 ,
            categorie : "Front-End " ,
            iconName : BsCpu , 
        } ,
    ]

    const [data , setData] = useState([]);
    const [dataEvent , setdataEvent] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/Classes/data');
            const jsonData = await response.json();
            setData(jsonData);
        }   catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };
    const fetchData2 = async () => {
        try {
            const response = await fetch('http://localhost:3001/ClassEventData/data');
            const jsonData = await response.json();
            setdataEvent(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
    fetchData2();
    } , [])

    return (
        <div className='classContainer' dir='rtl'>
            <div className='TopClassContainer'>
                <h1>کلاس های صدرا</h1>
                <p>صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند. </p>

                <div className='searchBoxContainer'>
                    <SearchBox />
                    <span id='popStyle'> {popularEvent && popularEvent.map((item , index) => <span key={index} >{`${item.title} , `}</span> )} : محبوب‌ها</span>
                </div>

                <div className='Categories'>
                    <h2>دسته بندی</h2>
                    <div className='BoxContainer'>
                        {
                            categories.map((item)=>(
                                <div className='Box' key={item.id} >
                                    <span>{item.categorie}</span>
                                    <span><item.iconName style={{width : 25 , height : 25}} /></span>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

            <div className='classBody'>
                <div className='classBodyTitle'>
                    <h2>دوره های پیشنهادی</h2>
                    <span>نمایش همه <FaLongArrowAltLeft/> </span>
                </div>

                <div className='CardBoxContainer'>
                    {/* <div className='CardBox'>
                        <div className='imgContainer'>
                            <img src='/public/assets/thumbnail3.jpg' />
                            <div className='cardInfo'>
                                <h2>طراحی رابط کاربری در شرکت‌های بزرگ</h2>
                                <p>مدرس استاد علی بابایی</p>
                                <div className='moreCardDetail'>
                                    <span><MdOutlineStackedBarChart style={{marginLeft : 5 , width : 19 , height : 19}} /> سطح مبتدی</span>
                                    <span><RiStackFill style={{marginLeft : 5 , width : 19 , height : 19}} /> 21 درس</span>
                                    <span><CiClock2 style={{marginLeft : 5 , width : 19 , height : 19}} /> 40 ساعت  </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='priceContainer'>
                            <span>128</span>
                            <span>هزارتومان</span>
                        </div>
                    </div> */}
                    {
                    data.slice(0 , 7).map((item)=> (
                            <ClassCard key={item.id} {...item} />
                        ))
                    }

                </div>

            </div>

            <div className='event_container' dir='ltr'>
                <div className='event_icons'>
                <button><p><FaLongArrowAltLeft style={{margin : 12}} /><Link to="/events" style={{fontFamily:"Yekan, sans-serif"}}>رویدادهای بیشتر</Link></p></button>
                <h2>رویدادهای آینده</h2>
                </div>
                <div className='event_card_data' dir='rtl'>
                    {
                    window.innerWidth >= 1920 ? dataEvent.slice(0 , 4).map((item) => (
                    <Link key={item.id} to={`/events/${item.id}`} ><EventCard key={item.id} {...item} /></Link>
                    )) : window.innerWidth <= 1440 && dataEvent.slice(0 , 3).map((item) => (
                    <Link key={item.id} to={`/events/${item.id}`}><EventCard key={item.id} {...item} /></Link>
                    ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Classes