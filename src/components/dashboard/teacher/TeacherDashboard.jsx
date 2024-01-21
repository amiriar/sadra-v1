import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton'
import DashboardCard from '../DashboardCard';

//icons
import { FaMicroblog } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { Checkbox, Divider, FormControl, Input, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';
import { showToast } from '../../modules/AuthModules/Toastify';
import { ToastContainer } from 'react-toastify';


function TeacherDashbaord({ userRole, userId }) {

    const categories = [
        {title:'داشبورد' , link:"/dashboard"},
        {title:'بلاگ ها', link:"/dashboard/blogs"},
        {title:'رویداد ها', link:"/dashboard/events"},
        {title:'کلاس ها', link:"/dashboard/classes"},
    ]
    const theme = createTheme({
        direction: 'rtl',
    });

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEducation, setUserEducation] = useState('');
    const [userIsStudent, setUserIsStudent] = useState(false);

    const handleCheckboxChange = (e) => {
        // Convert the checkbox value to 1 (true) or 0 (false)
        setUserIsStudent(e.target.checked ? 1 : 0);
    };
    
    const handleSelectChange = (event) => {
        setUserEducation(event.target.value);
    };
    const insertHandler = async () => {
        if(userEmail === '' || userName === '' || userLastName === '' || userAge === '' || userPhone === '' || userEducation === ''){
            showToast('لطفا تمامی فیلد هارا پرکنید.', 'error');
        } else{
            const response = await axios.post('http://localhost:3001/fullInfo', {
                id: userId,
                name: userName,
                lastName: userLastName,
                email: userEmail,
                age: userAge,
                phoneNumber: userPhone,
                education: userEducation,
                isStudent: userIsStudent
            });
            console.log(response);
            showToast("اطلاعات شما ثبت شد! حالا، به صفحات دیگر دسترسی دارید.","success")
        }
    }
    useEffect(() => {
        userId && axios.get(`http://localhost:3001/users/data/${userId}`)
            .then(response => {
                setUserName(response.data[0][0].name);
                setUserLastName(response.data[0][0].lastName);
                setUserEmail(response.data[0][0].email);
                setUserAge(response.data[0][0].age)
                setUserPhone(response.data[0][0].phoneNumber)
                setUserEducation(response.data[0][0].education)
                setUserIsStudent(response.data[0][0].isStudent)
            })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });
    }, [userId])


    return (
        <>
        {
            userRole === "teacher" ?
            <div className='userPanel'>
                <div className='sideBarPanel'>
                    <div>
                        {
                            categories.map((item) => (
                                <Link key={item.title} to={item.link}>{item.title}</Link>
                            ))
                        }
                    </div>
                    <br /><br /><br />
                    <div>
                        <SignOutButton/>
                    </div>
                </div>
                <div className='mainPanel'>
                    <div className="cards-container">
                        <DashboardCard icon={<FaMicroblog size={40} />} title={'بلاگ ها'} link={'/dashboard/blogs'} />
                        <DashboardCard icon={<MdEvent size={40} />} title={'رویداد ها'} link={'/dashboard/events'} />
                        <DashboardCard icon={<SiGoogleclassroom size={40} />} title={'کلاس ها'} link={'/dashboard/classes'} />
                    </div>
                    <br />
                    <Divider/>
                    <br />
                    <form>

                        <h1>ثبت اطلاعات تکمیلی:</h1>
                            <ThemeProvider theme={theme}>
                                <div className='formPanel'>
                                    <FormControl variant="outlined" sx={{ marginTop: "1rem", '&:focus-within': { borderColor: 'green !important' } }}>
                                        <InputLabel htmlFor="first-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan, sans-serif" }}>
                                            نام
                                        </InputLabel>
                                        <Input
                                            id="first-name"
                                            label="نام"
                                            variant="outlined"
                                            sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                            
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                        <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                            نام خانوادگی
                                        </InputLabel>
                                        <Input
                                            id="last-name"
                                            label="نام خانوادگی"
                                            variant="outlined"
                                            sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                            value={userLastName}
                                            onChange={(e) => setUserLastName(e.target.value)}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                        <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                            پست الکترونیکی
                                        </InputLabel>
                                        <Input
                                            id="email"
                                            label="پست الکترونیکی"
                                            variant="outlined"
                                            sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                        <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                            سن
                                        </InputLabel>
                                        <Input
                                            id="age"
                                            label="سن"
                                            type='number'
                                            variant="outlined"
                                            sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                            value={userAge}
                                            onChange={(e) => setUserAge(e.target.value)}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                        <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                            شماره تماس
                                        </InputLabel>
                                        <Input
                                            id="phone"
                                            label="شماره تماس"
                                            type='number'
                                            variant="outlined"
                                            sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                            value={userPhone}
                                            onChange={(e) => setUserPhone(e.target.value)}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" sx={{ marginTop: '2rem' }}>
                                        <Select
                                            id="education"
                                            sx={{ position: 'relative', fontFamily: 'Yekan, sans-serif' }}
                                            value={userEducation === '' ? 'مقطع تحصیلی' : userEducation}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <MenuItem value="مقطع تحصیلی" 
                                            disabled={userEducation !== 'مقطع تحصیلی'}
                                            sx={{fontFamily:"Yekan,sans-serif"}}>
                                            مقطع تحصیلی
                                            </MenuItem>
                                            <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="دیپلم">دیپلم</MenuItem>
                                            <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="لیسانس">لیسانس</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '1rem', display: 'inline', alignItems: 'center' }}>
                                        <Checkbox
                                            checked={userIsStudent === 1 ? true : false}
                                            onChange={handleCheckboxChange}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            sx={{ color: '#4ca773' }}
                                            id='is-student'
                                        />
                                        <label htmlFor="is-student" style={{ cursor:"pointer"}}>
                                            دانشجو هستم
                                        </label>
                                    </FormControl>
                                </div>
                            </ThemeProvider>
                            <button
                                className='login_Btn_No_Hid'
                                onClick={insertHandler}
                                style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                                type="button"
                            >
                                ثبت اطلاعات نوشته شده
                            </button>
                        {/* <p className='panelHint'>با کلیک روی این دکمه به مرحله بعد ثبت اطلاعات ارسال میشوید.</p> */}
                        </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
                <br />
                <Divider/>
            </div>
            :
            <h2>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h2>
        }
        
        </>
    );
}

export default TeacherDashbaord