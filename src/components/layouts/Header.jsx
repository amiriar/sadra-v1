import React, { useState } from 'react'
// Styles
import './Header.css';

// Components
import SideBar from './Drawer';

// Logo
import {Logo} from './svg/Logo';
import Logo2 from './svg/Logo2';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//auth
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {

  const { loginWithRedirect , isAuthenticated } = useAuth0()
  
  const [isOpen , setIsopen] = useState(false)

  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/admin')
  }

  return (
    <div className='NavBar'>
      <div className='login_Btn_con'>
        {
          isAuthenticated 
          ? 
          <button className='login_Btn' style={{cursor:"pointer"}} onClick={clickHandler()}>داشبورد</button>
          :
          <button className='login_Btn' style={{cursor:"pointer"}} onClick={() => loginWithRedirect()}>ثبت نام و ورود</button>

        }
        <RxHamburgerMenu className='burgur' onClick={()=> setIsopen(e => !e)} />
      </div>    
      <div className='List_Logo'>
      <div>
          <ul>
              <li><NavLink className='link' to={'/contact'}>تماس با ما</NavLink></li>
              <li><NavLink className='link' to={'/blog'}>بلاگ</NavLink></li>
              <li><NavLink className='link' to={'/events'}>رویدادها</NavLink></li>
              <li><NavLink className='link' to={'/classes'}>کلاس‌ها</NavLink></li>
              <li><NavLink className='link' to={'/'}>صفحه اصلی</NavLink></li>
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
