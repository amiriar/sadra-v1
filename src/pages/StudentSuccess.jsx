import React from 'react'
import { Masonry } from '@mui/lab'
import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material';

//css
import './StudentSuccess.css'

//DB
import StudentDB from '../utils/StudentSuccess.json'
import VideoComponent from '../components/modules/succes-modules/VideoComponent';

function StudentSuccess() {


    return (
        <div>
            <div className='successHero' dir='rtl'>
                <div className='successHeroImage'></div>
                <div className='successHeroContent'>
                    <h1 className='successHeroContentHeader'>داستان موفقیت همراهان صدرا</h1>
                    <p className='successHeroContentText'>
                        برای شنیدن داستان موفقیت دانش آموزان و استاید ما فقط از ما نپرسید، خود
                        این همراهان صدرا هستن که برای شما داستان‌های خودشون رو روایت می‌کنن.
                    </p>
                </div>
                    <div className='successHeroImageSmall'></div>
            </div>

            <div className='successMain'>
                <div className='successMainContent' dir='rtl' style={{margin:"6rem"}}>
                    <Grid container spacing={2} fontFamily={'Yekan,sans-serif'}>
                        {
                            StudentDB.map((item) => (
                                <Grid item key={item.id} xs={12} sm={6} md={4}>
                                {
                                    item.video.src ? (
                                        <VideoComponent video={item.video} />
                                    ) : (
                                        <Paper spacing={2} textAlign={'center'} sx={{boxSizing:"border-box", padding:"1.5rem 1.25rem", background:"red"}}>
                                            <div style={{display:"flex", justifyContent:"right", marginBottom:"1rem",marginTop:"1rem", boxSizing:'border-box' ,padding:"0rem 1.25rem"}}>
                                                <Avatar src={item.author.picture} alt={item.author.name} style={{ marginLeft: 10, objectFit:'cover', marginRight:10,marginTop:10, height:"45px",width:"45px"}} />
                                                <div style={{display:'flex', flexDirection:"column"}}>
                                                    <Typography fontFamily={'Yekan,sans-serif'} variant="h6">{item.author.name}</Typography>
                                                    <Typography fontFamily={'Yekan,sans-serif'} variant="subtitle1">{item.author.job}</Typography>
                                                </div>
                                            </div>
                                            <div style={{display:'flex', justifyContent:"center"}}>
                                                {
                                                    item.additionalPicture ? 
                                                    <img src={item.additionalPicture} alt={item.additionalPicture} style={{borderRadius:"0.5rem",height:"500px", width:"95%", objectFit:"cover", objectPosition:"100% 50%", marginBottom:"1rem"}} />
                                                    : null
                                                }
                                            </div>
                                                <Typography sx={{fontSize:"1rem", lineHeight:"1.4rem", marginBottom:"0.5rem"}} className='successPostDesc' variant="body2" fontFamily={'Yekan,sans-serif'}>{item.description}</Typography>
                                                <Divider/>
                                                <Typography sx={{fontSize:"1rem", lineHeight:"1.4rem", marginBottom:"0.5rem", textAlign:"left"}} className='successPostDesc' variant="body2" fontFamily={'Yekan,sans-serif'}>{item.date}</Typography>
                                        </Paper>
                                    )
                                }
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default StudentSuccess