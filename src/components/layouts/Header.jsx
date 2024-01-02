import React, { useState } from 'react'
// Styles
import './Header.css';

// Components
import SideBar from './Drawer';

// Logo
import {Logo} from './svg/Logo';
import Logo2 from './svg/Logo2';
import { RxHamburgerMenu } from "react-icons/rx";
import Pattern from './svg/pattern';

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
            <li><p>تماس با ما</p></li>
            <li><p>رویدادها</p></li>
            <li><p>کلاس‌ها</p></li>
            <li><p>صفحه اصلی</p></li>
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
