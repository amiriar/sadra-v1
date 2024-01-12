import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import { Divider, FormControl, Input, InputLabel, MenuItem, Select, TextField, ThemeProvider, createTheme } from '@mui/material';


function DashInfo() {
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const persianMonths = [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند',
    ];

    const generateDays = () => {
        const daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
        return Array.from({ length: daysInMonth[selectedMonth - 1] }, (_, index) => index + 1);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    
        // If the selected day is greater than the number of days in the new month, adjust it
        if (selectedDay > generateDays().length) {
            setSelectedDay(generateDays().length);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard/token', {withCredentials: true})
            .then(response => {
            const { email, role, id } = response.data;
            setUserId(id);
            setUserEmail(email);
            setUserRole(role);
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, []); 

    useEffect(() => {
        userId && axios.get(`http://localhost:3001/users/data/${userId}`)
            .then(response => {
                setUserName(response.data[0][0].name)
                setUserLastName(response.data[0][0].lastName)
                let dates = response.data[0][0].birthDate.split("/")
                setSelectedYear(dates[0])
                setSelectedMonth(dates[1])
                setSelectedDay(dates[2])
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, [userId])

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate("/auth/login")
    }
    const categories = [
        {title:'داشبورد', link:"/dashboard"},
        {title:'اطلاعات',  link:"/dashboard/infos"},
    ]

    const theme = createTheme({
        direction: 'rtl', // Set the theme direction to RTL
    });

    const insertHandler = async () => {
        const Birth = `${selectedYear}/${selectedMonth}/${selectedDay}`
        const response = await axios.post('http://localhost:3001/fullInfo', {
            id: userId,
            name: userName,
            lastName: userLastName,
            email: userEmail,
            birth: Birth,
        });
        console.log(response);
        navigate(response.data.path)
    }

    return (
        <div dir='rtl' className='panelContainer'>
            {
                userRole === "user" ? 
                    <div className='userPanel'>
                        <div className='sideBarPanel'>
                            <div>
                                {
                                    categories.map((item) => (
                                        <Link key={item.title} to={item.link}>{item.title}</Link>
                                    ))
                                }
                            </div>
                            <div>
                                <SignOutButton/>
                            </div>
                        </div>
                        <div className='mainPanel'>
                            <h1>مرحله 1 ثبت اطلاعات تکمیلی:</h1>
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
                                                sx={{ position: 'relative' }}
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
                                                sx={{ position: 'relative' }}
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
                                                sx={{ position: 'relative' }}
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                required
                                            />
                                        </FormControl>
                                        
                                        <h2 style={{marginTop:"1rem"}}>تاریخ تولد:</h2>
                                        <div className="birthdateInputs">
                                            <FormControl variant="standard" sx={{ marginTop: '1rem', width:"20%" }}>
                                                <InputLabel htmlFor="day" sx={{ left: 'auto', right: 40, fontFamily: 'Yekan,sans-serif' }}>
                                                روز
                                                </InputLabel>
                                                <Select
                                                    id="day"
                                                    label="روز"
                                                    variant="standard"
                                                    sx={{ position: 'relative' }}
                                                    value={selectedDay}
                                                    onChange={(e) => setSelectedDay(e.target.value)}
                                                    required
                                                >
                                                {generateDays().map(day => (
                                                    <MenuItem key={day} value={day}>{day}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>

                                            <FormControl variant="standard" sx={{ marginTop: '1rem', width:"20%" }}>
                                                <InputLabel htmlFor="month" sx={{ left: 'auto', right: 40, fontFamily: 'Yekan,sans-serif' }}>
                                                ماه
                                                </InputLabel>
                                                <Select
                                                    id="month"
                                                    label="ماه"
                                                    variant="standard"
                                                    sx={{ position: 'relative' }}
                                                    value={selectedMonth}
                                                    onChange={handleMonthChange}
                                                    required
                                                >
                                                {persianMonths.map((month, index) => (
                                                    <MenuItem key={index + 1} value={index + 1}>{month}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>

                                            <FormControl variant="standard" sx={{ marginTop: '1rem', width:"20%" }}>
                                                <InputLabel htmlFor="year" sx={{ left: 'auto', right: 40, fontFamily: 'Yekan,sans-serif' }}>
                                                سال
                                                </InputLabel>
                                                <Select
                                                    id="year"
                                                    label="سال"
                                                    variant="standard"
                                                    sx={{ position: 'relative'}}
                                                    value={selectedYear}
                                                    onChange={(e) => setSelectedYear(e.target.value)}
                                                    required
                                                >
                                                {Array.from({ length: 83 }, (_, index) => index + 1320).map(year => (
                                                    <MenuItem key={year} value={year}>{year}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                            </ThemeProvider>
                            <button className='login_Btn_No_Hid' onClick={insertHandler} style={{width:"fit-content", marginTop:"2rem", cursor:"pointer"}}>
                                ثبت اطلاعات نوشته شده
                            </button>
                            <p className='panelHint'>با کلیک روی این دکمه به مرحله بعد ثبت اطلاعات ارسال میشوید.</p>
                        </div>
                    </div>
                :
                <>
                    <h1>ابتدا از حساب کاربری خود خارج شوید و دوباره وارد شوید !</h1>
                    <h1>اگر این مشکل ادامه پیدا کرد با تیم پشتیبانی در ارتباط باشید.</h1>
                    <button className='login_Btn' style={{cursor:"pointer"}} onClick={clickHandler}>ورود</button>
                </>
            }
        </div>
    );
}

export default DashInfo;