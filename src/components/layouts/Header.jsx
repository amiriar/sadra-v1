import React, { useState } from 'react'
// Styles
import './Header.css';

// Components
import SideBar from './Drawer';

// Logo
import {Logo} from './svg/Logo';
import Logo2 from './svg/Logo2';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen , setIsopen] = useState(false)

  return (
    <div className='NavBar'>
      <div className='login_Btn_con'>
          <button className='login_Btn'>ثبت نام و ورود</button>
          <RxHamburgerMenu className='burgur' onClick={()=> setIsopen(e => !e)} />
      </div>    
      <div className='List_Logo'>
      <div>
          <ul>
              <li><Link className='link' to={'/contact'}>تماس با ما</Link></li>
              <li><Link className='link' to={'/blog'}>بلاگ</Link></li>
              <li><Link className='link' to={'/events'}>رویدادها</Link></li>
              <li><Link className='link' to={'/classes'}>کلاس‌ها</Link></li>
              <li><Link className='link' to={'/'}>صفحه اصلی</Link></li>
          </ul>
      </div>

      <div className='logo_Container'>
          <Logo2 className="logo2" />
          <Logo/>
      </div>
      </div>
    <SideBar setIsopen={setIsopen} isOpen={isOpen} />
    </div>
  )
}

export default Header
