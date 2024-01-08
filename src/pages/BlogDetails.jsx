import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//css:
import './BlogDetails.css'
import Line from '../components/modules/Line'

// DB:
import BlogDB from '../utils/BlogDB.json'
import VerticalProgressBar from '../components/modules/ProgressBar'
import { Avatar, CardContent, Divider, Grid, Typography } from '@mui/material'

// cards:
import BlogCard from '../components/modules/Blog-modules/BlogCard';


//icons:
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


function BlogDetails() {
    
    const { id } = useParams()
    const blogId = parseInt(id, 10);
    const BlogPost = BlogDB.find((blog) => blog.id === blogId)

    const reliablePost1 = BlogDB.find((blog) => blog.id === 1)
    const reliablePost2 = BlogDB.find((blog) => blog.id === 2)
    const reliablePost3 = BlogDB.find((blog) => blog.id === 3)


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async ({ id }) => {
            try {
                const response = await fetch(`http://localhost:3001/blogdetail/${id}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData({ id });
    }, []);
    
    const newData = data[0]
    const hashtags = newData?.hashtags.split(",")

    return (
        <div style={{ maxWidth:"1920px" ,margin:"0 auto"}}>
                {
                    newData && 
                        <React.Fragment>
                            <div className='Home' id='heroBlogDetails'>
                                <div>
                                    <div className='image_container_blog_details' >
                                        <img src={newData.imageData} alt={newData.imageData} id='imageResponsive' />
                                    </div>
                                </div>
                                <div>
                                    <div className='Data_Container'>
                                        <div className='tags' dir='rtl' id='hashtagsDetails' style={{marginBottom:"1rem"}}>
                                            {
                                                hashtags?.map((tag) => (
                                                    <Link className='link' to={`/blog/tags/${tag}`} key={tag}>#{tag}</Link>
                                                ))
                                            }
                                        </div>
                                        <h1 style={{color:"#F9FAFB !important"}} dir='rtl'>{newData.title}</h1>
                                        <h2 style={{color:"#D0D5DD !important"}} dir='rtl'>{newData.description}</h2>
                                        <p style={{color:"#FFF !important"}} dir='rtl'>نوشته شده توسط {newData.authorName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mainContentBlogDetails'>
                                <div className='ContentTextBlogDetails'>    
                                    <div>
                                        <p style={{color: "#475467"}} dir='rtl'>{newData.detailsDescription1}</p><br />
                                        <p style={{color: "#475467"}} dir='rtl'>{newData.detailsDescription2}</p><br />
                                        <p style={{color: "#475467"}} dir='rtl'>{newData.detailsDescription3}</p><br />
                                    </div>
                                    <div className='BlogDetailsPictures'>
                                        <img src={newData.descriptionImage1} alt={newData.descriptionImage1} className='BlogDetailsPicture' />
                                        <img src={newData.descriptionImage2} alt={newData.descriptionImage2} className='BlogDetailsPicture' />
                                    </div>
                                    <div className='BlogDetailsSummery'>
                                        <p dir='rtl' style={{color: "#475467"}}>{newData.detailsDescription4}</p>
                                        <h1 dir='rtl' className='middleBlogHeader' style={{color:"#4CA773"}}>"{newData.title}"</h1>
                                        <p dir='rtl' style={{color: "#475467"}}>{newData.detailsDescription4}</p>
                                    </div>
                                    <div className='BlogPostInfo'>
                                        <div className='tags' id='hashtagsDetails' dir='rtl'>
                                            {
                                                hashtags.map((tag)=> (
                                                    <Link className='link' key={tag} to={`/blog/${tag}`} style={{background: 'rgba(0, 0, 0, 0.65)',color:"#FFF"}}>#{tag}</Link>
                                                ))
                                            }
                                        </div>

                                        <br />
                                        <Divider/>
                                        <br />

                                        <div className='authorInfo'>
                                            <CardContent style={{ direction: "rtl", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                                                <Avatar src={newData.authorPicture} alt={'authorName'} style={{ marginLeft: 10, objectFit:'cover' }} />
                                                <div>
                                                    <div>
                                                        <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1" color={'#475467'}>
                                                            {newData.authorName}
                                                        </Typography>
                                                        <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color={"#98A2B3"} >
                                                            {newData.authorDescription}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className='authorIcons'>
                                                <Link to={newData.authorLinkedin} ><FaLinkedin       size={25} color='#495057' /></Link>
                                                <Link to={newData.authorPinterest}><FaPinterest      size={25} color='#495057' /></Link>
                                                <Link to={newData.authorTwitterX} ><FaSquareXTwitter size={25} color='#495057' /></Link>
                                                <Link to={newData.authorFacebook} ><FaFacebook       size={25} color='#495057' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='timeProgressBlogDetails' dir='rtl'>
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <span>{newData.date}</span>&nbsp;
                                        <span><Line/></span>&nbsp;
                                        <span>{newData.timeToRead} دقیقه</span>
                                    </div>
                                    <VerticalProgressBar bgcolor={"#6AD095"} progress={newData.timeToRead} width={"5px"}/>
                                    <span id="dissapear" style={{marginRight:"4rem"}}>پایان</span>
                                </div>
                            </div>
                            <div className='BlogRelatablePosts'>
                                <h3 dir='rtl' style={{marginBottom:"2rem", marginRight:"1.5rem", fontSize:"1.125rem"}}>پست های مرتبط</h3>
                                <div className='blogCardsContainer' dir='rtl'>
                                    {
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <BlogCard
                                                    id={reliablePost1.id}
                                                    imageData={reliablePost1.imageData}
                                                    date={reliablePost1.date}
                                                    title={reliablePost1.title}
                                                    description={reliablePost1.description}
                                                    authorName={reliablePost1.author.name}
                                                    authorDescription={reliablePost1.author.description}
                                                    authorPicture={reliablePost1.author.picture}
                                                    hashtags={reliablePost1.hashtags}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <BlogCard
                                                    id={reliablePost2.id}
                                                    imageData={reliablePost2.imageData}
                                                    date={reliablePost2.date}
                                                    title={reliablePost2.title}
                                                    description={reliablePost2.description}
                                                    authorName={reliablePost2.author.name}
                                                    authorDescription={reliablePost2.author.description}
                                                    authorPicture={reliablePost2.author.picture}
                                                    hashtags={reliablePost2.hashtags}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <BlogCard
                                                    id={reliablePost3.id}
                                                    imageData={reliablePost3.imageData}
                                                    date={reliablePost3.date}
                                                    title={reliablePost3.title}
                                                    description={reliablePost3.description}
                                                    authorName={reliablePost3.author.name}
                                                    authorDescription={reliablePost3.author.description}
                                                    authorPicture={reliablePost3.author.picture}
                                                    hashtags={reliablePost3.hashtags}
                                                />
                                            </Grid>
                                        </Grid>
                                    }
                                </div>
                            </div>
                        </React.Fragment>
                }
        </div>
    )
}

export default BlogDetails