import React from 'react'

//css
import './StudentDetail.css'
import { useParams } from 'react-router-dom';

//DB
import StudentDB from '../utils/StudentDataDB.json'
import { Divider } from '@mui/material';

const StudentDetail = () => {

    const { name } = useParams()
    const targetStudent = StudentDB.find((stu) => stu.name === name)
    const firstFourStudents = StudentDB.slice(0, 4);
    console.log(firstFourStudents);
    
    return (
        <div>
            <div className='StuDetailsHero' dir='rtl' style={{padding:"0 4rem"}}>
                <div className='StuDetailsHeroInfo'>
                    <div>
                        <div>
                            <h1 className='stuName'>{targetStudent?.name}</h1>
                            <h2 className='stuCoureses'>{targetStudent?.courese}</h2>
                        </div>
                        <div>
                            <p className='StuDetailsHeroInfoPs'><span className='StuDetailsHeroInfoPsSpan'>قبل از صدرا:</span>&nbsp;&nbsp;&nbsp; {targetStudent.beforeJob}</p>
                            <p className='StuDetailsHeroInfoPs'><span className='StuDetailsHeroInfoPsSpan'>بعد &nbsp;از صدرا:</span>&nbsp;&nbsp;&nbsp; {targetStudent.afterJob}</p>
                        </div>
                    </div>
                    <div  style={{display:"flex"}}>
                        <div className='stuSuccessStrightLine'></div>
                        <p className='StuDetailsHeroInfoDesc'>{targetStudent.titleDescription}</p>
                    </div>
                </div>
                <div className='StuDetailsHeroImgContainer'>
                    <div className='StuDetailsHeroImgDiv'>
                        <img src={targetStudent.titlePicture} alt={targetStudent.titlePicture} />
                    </div>
                </div>
            </div>

            <div className='StuDetailsMain' dir='rtl' style={{padding:"0 4rem"}}>
                <div className='StuFirstSection'>
                    <h3>درباره من</h3>
                    <p>{targetStudent.about}</p>
                </div>
                <Divider/>
                <div className='StuSecondSection'>
                    <h3>چی باعث شد دوره خودتون رو در صدرا بگذرونید ؟</h3>
                    <p>{targetStudent.whatMadeYouChooseSadra}</p>
                </div>
                <Divider/>
                <div className='StuThirdSection'>
                    <h3>قبل از صدرا مشغول چه کاری بودید ؟</h3>
                    <p>{targetStudent.whatBeforeSadra}</p>
                </div>
                <Divider/>
                <div className='StuFourthSection'>
                    <h3>نظرت درباره بوت کمپ طراحی رابط کاربری صدرا به ما می‌گی؟</h3>
                    <p>{targetStudent.opinionOnSadra}</p>
                </div>
            </div>

            <div className='StuOtherStus' dir='rtl' style={{padding:"0 4rem", marginBottom:"5rem"}}>
                {
                    firstFourStudents.map((stu) => (
                        <div className='StuOtherStusDiv'>
                            <img src={stu.titlePicture} alt={stu.titlePicture} />
                            <h4>{stu.name}</h4>
                            <p>{stu.afterJob}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StudentDetail