import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//css:
import './BlogDetails.css'
import Line from '../components/modules/Line'

import VerticalProgressBar from '../components/modules/ProgressBar'
import { Avatar, CardContent, Divider, Grid, Typography } from '@mui/material'

// cards:
import BlogCard from '../components/modules/Blog-modules/BlogCard';


//icons:
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import axios from 'axios'


function BlogDetails() {
    
    const { id } = useParams()

    const [data, setData] = useState([]);
    const [relevent, setRelevent] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blog/data/asc');
                const jsonData = response.data;
                setData(jsonData[id - 1]);
    
                const relevantItems = jsonData
                    .filter((item) => item.hashtags.split(",")[0] === data.hashtags.split(",")[0])
                    .slice(0, 3);
    
                setRelevent(relevantItems);

                setTags(data.hashtags.split(","))
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData(tags);
    }, [id, data]);
    

    return (
        <div style={{ maxWidth:"1920px" ,margin:"0 auto"}}>
                {
                    data && 
                        <React.Fragment>
                            <div className='Home'>
                                <div className='BoxData'>
                                    <h1 dir='rtl'>مؤسسه آموزشی و پژوهشی صدرا</h1>
                                    <h2 dir='rtl'>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
                                    <p dir='rtl'>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
                                </div>

                                <div className='BoxImage'>
                                    <img src={data.imageData} alt={data.imageData} />
                                </div>
                            </div>
                            <div className='mainContentBlogDetails'>
                                <div className='ContentTextBlogDetails'>    
                                    <div>
                                        <p style={{color: "#475467"}} dir='rtl'>{data.detailsDescription1}</p><br />
                                        <p style={{color: "#475467"}} dir='rtl'>{data.detailsDescription2}</p><br />
                                        <p style={{color: "#475467"}} dir='rtl'>{data.detailsDescription3}</p><br />
                                    </div>
                                    <div className='BlogDetailsPictures'>
                                        <img src={data.descriptionImage1} alt={data.descriptionImage1} className='BlogDetailsPicture' />
                                        <img src={data.descriptionImage2} alt={data.descriptionImage2} className='BlogDetailsPicture' />
                                    </div>
                                    <div className='BlogDetailsSummery'>
                                        <p dir='rtl' style={{color: "#475467"}}>{data.detailsDescription4}</p>
                                        <h1 dir='rtl' className='middleBlogHeader' style={{color:"#4CA773"}}>"{data.title}"</h1>
                                        <p dir='rtl' style={{color: "#475467"}}>{data.detailsDescription4}</p>
                                    </div>
                                    <div className='BlogPostInfo'>
                                        <div className='tags' id='hashtagsDetails' dir='rtl'>
                                            {
                                                tags && tags.map((tag)=> (
                                                    <Link className='link' key={tag} to={`/blog/${tag}`} style={{background: 'rgba(0, 0, 0, 0.65)',color:"#FFF"}}>#{tag}</Link>
                                                ))
                                            }
                                        </div>

                                        <br />
                                        <Divider/>
                                        <br />

                                        <div className='authorInfo'>
                                            <CardContent style={{ direction: "rtl", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                                                <Avatar src={data.authorPicture} alt={'authorName'} style={{ marginLeft: 10, objectFit:'cover' }} />
                                                <div>
                                                    <div>
                                                        <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1" color={'#475467'}>
                                                            {data.authorName}
                                                        </Typography>
                                                        <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color={"#98A2B3"} >
                                                            {data.authorDescription}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className='authorIcons'>
                                                <Link to={data.authorLinkedin} ><FaLinkedin       size={25} color='#495057' /></Link>
                                                <Link to={data.authorPinterest}><FaPinterest      size={25} color='#495057' /></Link>
                                                <Link to={data.authorTwitterX} ><FaSquareXTwitter size={25} color='#495057' /></Link>
                                                <Link to={data.authorFacebook} ><FaFacebook       size={25} color='#495057' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='timeProgressBlogDetails' dir='rtl'>
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <span>{data.date}</span>&nbsp;
                                        <span><Line/></span>&nbsp;
                                        <span>{data.timeToRead} دقیقه</span>
                                    </div>
                                    <VerticalProgressBar bgcolor={"#6AD095"} progress={data.timeToRead} width={"5px"}/>
                                    <span id="dissapear" style={{marginRight:"4rem"}}>پایان</span>
                                </div>
                            </div>
                            <div className='BlogRelatablePosts'>
                                <h3 dir='rtl' style={{marginBottom:"2rem", marginRight:"1.5rem", fontSize:"1.125rem"}}>پست های مرتبط</h3>
                                <div className='blogCardsContainer' dir='rtl'>
                                    <Grid container spacing={3}>
                                        {
                                            relevent ? relevent.map((item) => (
                                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                                    <BlogCard
                                                        id={item.id} 
                                                        imageData={item.imageData}
                                                        date={item.date}
                                                        title={item.title}
                                                        description={item.description}
                                                        authorName={item.authorName}
                                                        authorDescription={item.authorDescription}
                                                        authorPicture={item.authorPicture}
                                                        hashtags={item.hashtags}
                                                    />
                                                </Grid>
                                            ))
                                            :
                                            <h1>loading ...</h1>
                                        }
                                    </Grid>
                                </div>
                            </div>
                        </React.Fragment>
                }
        </div>
    )
}

export default BlogDetails