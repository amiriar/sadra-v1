import React, { useEffect, useState } from 'react'

// Styles 
import './Home.css';
import image from '/assets/manLaptop.png'
// Components
import SearchBox from '../components/modules/SearchBox';
import Line from '../components/modules/Line';
import VideoPlayer from '../components/modules/VideoPlayer';
import CommentCard from '../components/modules/HomePageModule/CommentCard';
import CardPopular from '../components/modules/HomePageModule/CardPopular';
import EventCard from '../components/modules/EventModules/EventCard';
import usePersianNumber from '../helper/PersianNumbers';

// MUI 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button} from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// Icons
import { Mokhaberat , Tapci } from '../components/layouts/svg/workingCorporate';
import { TiMessages } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
// Media
import Video from '/assets/Media.mp4'
import imageAbout from '/assets/image_about_us.png'
import { Link } from 'react-router-dom';
// Variabels
import Loading from '../helper/Loading';

const Home = () => {
const [TabHeaders , setTabHeaders] = useState([
  {
    id : 1 ,
    title : "طراحی UI/UX"
  }
  ,
  {
    id : 2 ,
    title : "طراحی گرافیک"
  }
  ,
  {
    id : 3 ,
    title : "انیمیشن و 3D"
  }
  ,
  {
    id : 4 ,
    title : "فرانت‌اند"
  }
  ,
  {
    id : 5 ,
    title : "بک‌اند"
  }
  ,
  {
    id : 6 ,
    title : "IOT"
  }
  
])

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [dataEvent , setdataEvent] = useState([]);
  const [commentData , setCommentData] = useState([]);
  const [popularEvents , setPopularEvents] = useState([])
  const [CommentData , setCommetData] = useState([]);
  useEffect(()=> {
    const fetchData = async () => {
      try {
          const response = await fetch('http://localhost:3001/HomeEventData/data');
          const jsonData = await response.json();
          setdataEvent(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  const fetchData2 = async () => {
      try {
          const response = await fetch('http://localhost:3001/HomeContactsDetail/data');
          const jsonData = await response.json();
          setCommentData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  const fetchData3 = async () => {
    try {
        const response = await fetch('http://localhost:3001/HomePopularData/data');
        const jsonData = await response.json();
        setPopularEvents(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const fetchData4 = async () => {
  try {
      const response = await fetch('http://localhost:3001/HomeComment/data');
      const jsonData = await response.json();
      setCommetData(jsonData);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};
  fetchData();
  fetchData2();
  fetchData3();
  fetchData4();
  } , [])



  return (
    <>
    <div className='Home'>
      <div className='BoxData'>
        <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
        <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
        <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
        <SearchBox firstWidth="80%" />
      </div>

      <div className='BoxImage'>
        <img src={"/assets/manLaptop.png"} />
      </div>
    </div>


    <div className='Boxgraduate'>
      <p>فارغ التحصیلان دوره‌های ما، در . بهترین شرکت‌های کشور مشغول به کارند</p>
      <div className='BoxgraduateIcon'>
      <Mokhaberat/>
      <Tapci/>
      <Mokhaberat/>
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

      <h1>بیش از {usePersianNumber('500')} دانش‌آموخته از مسیر خود راضی بودند</h1>
  <div className='Slider'>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {commentData.map((item)=> (
          <SwiperSlide key={item.id} >
            <p id='cardComment'>{item.comment}</p>
            <img src={item.profile} />
            <p id='cardName'>{item.name}</p>
            <p id='cardJob'>{item.job}</p>
          </SwiperSlide>
        ))}
      </Swiper> */}


      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <p id='cardComment'>سلام رضا هستم از سال 1400 با این شرکت اشنا شدم و این مسیر زندگی من عوض شد</p>
            <img src={"/assets/1.png"} />
            <p id='cardName'>رضا</p>
            <p id='cardJob'>programmer</p>
          </SwiperSlide>

          <SwiperSlide>
            <p id='cardComment'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <img src={"/assets/2.png"} />
            <p id='cardName'>امیر</p>
            <p id='cardJob'>fullstack developer</p>
          </SwiperSlide>

          <SwiperSlide>
            <p id='cardComment'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،</p>
            <img src={"/assets/3.png"} />
            <p id='cardName'>محمد</p>
            <p id='cardJob'>programmer</p>
          </SwiperSlide>

          <SwiperSlide>
            <p id='cardComment'>this is ellon musk</p>
            <img src={"/assets/1.png"} />
            <p id='cardName'>rwin</p>
            <p id='cardJob'>programmer</p>
          </SwiperSlide>
      </Swiper>

      

  </div>

      <div className='contact_corporates'>
        <Tapci className="icons_contact"/>
        <Tapci className="icons_contact"/>
        <Tapci className="icons_contact"/>
      </div>
    </div>
    {/* Part Five */}

    <div className='popular_Tutorial' id='maxWidth' dir='rtl' >
        <div className='popIcons'>
          <Line/>
          <h2>دوره‌های محبوب</h2>
    </div>


    <div className='popTexts'>
      <div className='dataCon1'>
        <h2>بیش از 100 دوره‌ی فعال برای پیشرفت شما</h2>
      </div>

      <div className='dataCon2'>
        <h2>ما طیف وسیعی از دسته‌ها را برای کمک به شما در انتخاب دوره‌هایی که متناسب با تخصص شما هستند ارائه می‌کنیم. بیش از 100 دوره شما را از پایه راهنمایی می کند.</h2>
      </div>
    </div>


    {/* dataEvent */}
    <Box  sx={{ minHeight : '602px' ,  width: '100%', typography: 'body1', direction : "rtl" , mt : "6rem"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* <TabList variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" ,  }}} onChange={handleChange}>
            {
              TabHeaders.map((item) => <Tab key={item.id} sx={{fontFamily:"Yekan,sans-serif"}} label={item.title} value={item.id.toString()} /> )
            }
          </TabList> */}
          <TabList variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" ,  }}} onChange={handleChange} >
            <Tab  sx={{fontFamily:"Yekan,sans-serif"}} label={"طراحی UI/UX"} value={"1"} >طراحی UI/UX</Tab>
            <Tab  sx={{fontFamily:"Yekan,sans-serif"}} label={"طراحی گرافیک"} value={"2"} >طراحی گرافیک</Tab>
            <Tab  sx={{fontFamily:"Yekan,sans-serif"}} label={"انیمیشن 3D"} value={"3"} >انیمیشن و 3D</Tab>
            <Tab  sx={{fontFamily:"Yekan,sans-serif"}} label={"فرانت‌اند"} value={"4"} >فرانت‌اند</Tab>
          </TabList>
        </Box>
        {/* {
          TabHeaders.map((Tab)=> (
            <TabPanel key={Tab.id} value={Tab.id.toString()} >
            <div className='popCardEvent'>
              {
                popularEvents.filter((item)=> item.category === Tab.title).map((item)=> (
                    <CardPopular key={item.id} {...item} />
                ))
              }
            </div>
            </TabPanel>
          ))
        } */}
        {/* thumbnail, teacher, rate, price, time, level , lessons , title , discount */}
        <TabPanel value='1'>
        <div className='popCardEvent'>
          <CardPopular title={"طراحی UI"} teacher={"یزدانی"} thumbnail={"/assets/blog-images/1.jpeg"} price={"530"} level={"مبتدی"} time={"20"} lessons={"9"} />
          <CardPopular title={"طراحی UX"} teacher={"یزدانی"} thumbnail={"/assets/blog-images/2.jpeg"} price={"800"} level={"دشوار"} time={"80"} lessons={"15"} />
          <CardPopular title={"رنگ شناسی"} teacher={"اصغری"} thumbnail={"/assets/blog-images/3.jpeg"} price={"430"} level={"مبتدی"} time={"45"} lessons={"12"} />
        </div>
        </TabPanel>

        <TabPanel value='2'>
        <div className='popCardEvent'>
          <CardPopular title={"طراحی گرافیک ساده"} teacher={"محمدی"} thumbnail={"/assets/blog-images/2.jpeg"} price={"250"} level={"دشوار"} time={"95"} lessons={"30"} />
          <CardPopular title={"طراحی گرافیک پیشرفته"} teacher={"محمدی"} thumbnail={"/assets/blog-images/1.jpeg"} price={"700"} level={"مبتدی"} time={"65"} lessons={"24"} />
          <CardPopular title={"طراحی پوسته"} teacher={"محمدی"} thumbnail={"/assets/blog-images/3.jpeg"} price={"600"} level={"متوسط"} time={"35"} lessons={"7"} />
        </div>
        </TabPanel>

        <TabPanel value='3'>
        <div className='popCardEvent'>
          <CardPopular title={"طراحی انیمیشن"} teacher={"یزدانی"} thumbnail={"/assets/blog-images/2.jpeg"} price={"400"} level={"مبتدی"} time={"20"} lessons={"19"} />
          <CardPopular title={"طراحی کاراکتر"} teacher={"یزدانی"} thumbnail={"/assets/blog-images/7.jpeg"} price={"320"} level={"متوسط"} time={"78"} lessons={"12"} />
          <CardPopular title={"طراحی صحنه"} teacher={"یزدانی"} thumbnail={"/assets/blog-images/8.jpeg"} price={"280"} level={"مبتدی"} time={"87"} lessons={"9"} />
        </div>
        </TabPanel>

        <TabPanel value='4'>
        <div className='popCardEvent'>
          <CardPopular title={"طراحی صفحات وب"} teacher={"اقاپور"} thumbnail={"/assets/blog-images/6.jpeg"} price={"900"} level={"متوسط"} time={"70"} lessons={"50"} />
        </div>
        </TabPanel>


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
            <h1 dir='rtl'>افزایش رشد فردی و تقویت استعداد شما</h1>
            <p dir='rtl'>با بیش از یک دهه فعالیت زیرا همیشه می خواهیم خدمات آموزشی ارائه دهیم که در مدارس آموزش داده نمی شود.</p>
            <Button variant="outlined" sx={{ width : 150 , height : 45 , color : "#4CA773" , borderColor : "#4CA773" , borderRadius : 15}} >بیشتر بدانیم</Button>
          </div>
        </div>
    {/* part Seven  */}
        <div className='event_container'>
              <div className='event_icons'>
                <button><p><FaLongArrowAltLeft style={{margin : 12}} /><Link to="/events" style={{fontFamily:"Yekan, sans-serif"}}>رویدادهای بیشتر</Link></p></button>
                <h2>رویدادهای آینده</h2>
              </div>
              <div className='event_card_data' dir='rtl'>
                {/* {
                window.innerWidth >= 1920 ? dataEvent.slice(0 , 4).map((item) => (
                  <Link key={item.id} to={`/events/${item.id}`} ><EventCard key={item.id} {...item} /></Link>
                  )) : window.innerWidth <= 1440 && dataEvent.slice(0 , 3).map((item) => (
                  <Link key={item.id} to={`/events/${item.id}`} ><EventCard key={item.id} {...item} /></Link>
                  ))
                } */}
                {/* image, title, price, teacherFirstName, teacherLastName, date, time , discount  */}
                // category ,
//   title , 
//   teacher ,
//   image ,
//   price ,
//   discount ,
//   Detail_Head_Title ,
//   title_description1 ,
//   description1 ,
//   title_description2 ,
//   description2 ,
//   title_description3 ,
//   description3 ,
//   title_description4 ,
//   description4 ,
//   videoSrc ,
//   thumbnail ,
//   date , 
//   time ,
//   detailSubtitle ,
//   = dataCard;
              <Link to={`/events/1`} ><EventCard thumbnail={"/assets/thumbnail1.jpg"} videoSrc={"/assets/Media.mp4"} description4={"راحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد"} title_description4={"هدف نهایی"} description3="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون مع" title_description3={"داستان این اموزش"} description2={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description2={"هدف اموزش"} description1={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description1={"این دوره دوره کامل و جامع هست"} Detail_Head_Title={"مبانی اموزش"} category="help" title={"دوره html"} image={"/assets/blog-images/9.jpeg"} price={"300"} time={"18 00 00"} teacher={"ابرونی"} date={"06/02/2024"} /></Link>
              <Link to={`/events/2`} ><EventCard thumbnail={"/assets/thumbnail1.jpg"} videoSrc={"/assets/Media.mp4"} description4={"راحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد"} title_description4={"هدف نهایی"} description3="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون مع" title_description3={"داستان این اموزش"} description2={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description2={"هدف اموزش"} description1={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description1={"این دوره دوره کامل و جامع هست"} Detail_Head_Title={"مبانی اموزش"} category="help" title={"دوره JavaScript"} image={"/assets/blog-images/7.jpeg"} price={"800"} time={"7 00 00"} teacher={"ابرونی"} date={"06/02/2024"} /></Link>
              <Link to={`/events/3`} ><EventCard thumbnail={"/assets/thumbnail1.jpg"} videoSrc={"/assets/Media.mp4"} description4={"راحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد"} title_description4={"هدف نهایی"} description3="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون مع" title_description3={"داستان این اموزش"} description2={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description2={"هدف اموزش"} description1={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} title_description1={"این دوره دوره کامل و جامع هست"} Detail_Head_Title={"مبانی اموزش"} category="help" title={"دوره css"} image={"/assets/blog-images/5.jpeg"} price={"400"} time={"12 00 00"} teacher={"ابرونی"} date={"06/02/2024"} /></Link>

              </div>
        </div>
    </div>

  {/* Part Eight */}
          
  <div className='Comments_container'>
    <div className='Icons_comments'>
      <Line/>
      <h2>نظرات شما</h2>
    </div>

    <h1>نظرات همراهان قبلی صدرا</h1>

<div className='test'>
    <div className='comment_card_container'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      <div className='comment_card_container2'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      </div>
</div>

    
    <hr/>

    <div className='comment_card_container3'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      <div className='comment_card_container4'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      
      </div>
    </div>

</div>

  </div>
    </>
  )
}

export default Home
