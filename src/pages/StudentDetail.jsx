import React from 'react'
import { useNavigate } from 'react-router-dom';

//css
import './StudentDetail.css'
import { useParams } from 'react-router-dom';

//DB
import StudentDB from '../utils/StudentDataDB.json'
import { Divider, Grid } from '@mui/material';
import StudentCard from '../components/modules/succes-modules/StudentCard';

const StudentDetail = () => {

    const navigate = useNavigate()

    function clickHandler({ name }) {
        navigate(`/student/${name}`)
    }

    const { name } = useParams()
    const targetStudent = StudentDB.find((stu) => stu.name === name)
    const firstFourStudents = StudentDB.slice(0, 4);
    
    return (
        <div>
            <div className='StuDetailsHero' dir='rtl'>
                <div className='StuDetailsHeroInfo'>
                    <div>
                        <div>
                            <h1 className='stuName'>{targetStudent?.name}</h1>
                            <h2 className='stuCoureses'>{targetStudent?.courese}</h2>
                        </div>
                        <div className='mt2'>
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

            <div className='StuDetailsMain' dir='rtl'>
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

            <div className='StuOtherStusContainer' dir='rtl'>
                <h1 style={{fontSize: '2.125rem',fontStyle: 'normal',fontWeight: 500, textAlign:"center", marginTop:"1.5rem",marginBottom:"2rem"}}>با دانشجویان دیگر ما هم آشنا بشید</h1>
                <div className='StuOtherStus'>
                    <Grid container spacing={2} >
                        {firstFourStudents.map((student) => (
                            <Grid item xs={12} sm={6} md={6} lg={3} key={student.name} onClick={() => clickHandler({name: student.name})}>
                                <StudentCard student={student} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>

            <div className='StuExtraInformation' dir='rtl'>
                <div className='StuExtraInformationText'>
                    <h2>چی باعث شد دوره خودتون رو در صدرا بگذرونید ؟</h2>
                    <p>{targetStudent.whatMadeYouChooseSadra}</p>
                </div>
                <div className='StuExtraInformationVideo'>
                    {/* video */}
                    <video src={targetStudent.videoOnOpinion} controls poster={targetStudent.videoOnOpinionPoster}></video>
                </div>
                <div className='StuExtraInformationText'>
                    <h2>نظرت در باره بوت کمپ طراحی رابط کاربری صدرا به ما می‌گی؟</h2>
                    <p>{targetStudent.opinionOnSadra}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentDetail