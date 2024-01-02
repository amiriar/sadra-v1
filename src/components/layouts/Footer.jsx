import React from 'react'
import './Footer.css'

// Logos 
import {Corporations1} from './svg/Corporations';
import {Corporations2} from './svg/Corporations';
import {Corporations3} from './svg/Corporations';
import {Corporations4} from './svg/Corporations';
import {Corporations5} from './svg/Corporations';
import {Logo} from './svg/Logo';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer_content'>
        <h1 className='Footer_text_1'>در دوره‌هایی که علاقه داری شرکت کن و رشد شغلی خودت رو ببین</h1>
        <p className='Footer_text_2'>مربیان ما همه چیز را به راحتی به شما آموزش می دهند. امروز با ثبت نام در دوره های عالی با قیمت های مقرون به صرفه، مسیر شغلی خود را بهبود ببخشید.</p>

      <div>
        <button className='start_Btn'>همین حالا شروع کن</button>
      </div>

      </div>

      <div className='corporations'>
      <ul>
        <li><Corporations1/></li>
        <li><Corporations2/></li>
        <li><Corporations3/></li>
        <li><Corporations4/></li>
        <li><Corporations5/></li>
      </ul>
      </div>

      <div className='detail_container'>
        <div className='More_Detail'>
    <div className='lists'>
          <div className='Forums'>
            <ul>
              <li><h2>انجمن‌ها</h2></li>
              <li><p>دانشنامه</p></li>
              <li><p>سوالات پرتکرار</p></li>
            </ul>
          </div>
          <div className='companiese'>
            <ul>
              <li><h2>شرکت</h2></li>
              <li><p>شرایط و قوانین</p></li>
              <li><p>سیاست حفظ حریم خصوصی</p></li>
              <li><p>کوکی‌ها</p></li>
            </ul>
          </div>

          <div className='pages'>
            <ul>
              <li><h2>صفحات</h2></li>
              <li><p>صفحه نخست</p></li>
              <li><p>دوره‌ها</p></li>
              <li><p>رویدادها</p></li>
              <li><p>اساتید</p></li>
              <li><p>درباره ما</p></li>
              <li><p>آموزش در صدرا</p></li>
            </ul>
          </div>
    </div>
        <div className='detail_right'>
          <div>
          <h1>صدرا</h1>
          <Logo/>
          </div>
          <p>صدرا یک پلتفرم یادگیری آنلاین ملی است که به هر کسی و در هر کجا دسترسی به دوره های آنلاین را ارائه می دهد.</p>
        </div>


        </div>
      </div>

      <div className='footer_end'>
        <div className='end_container'>
          <p>Made with Love by Rwin & amir</p>
          <div className='socialmedia'>
            <CiFacebook className='icons' />
            <FaInstagram className='icons' />
            <FaTwitter className='icons' />
            <CiLinkedin className='icons' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
