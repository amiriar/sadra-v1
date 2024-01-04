import React from 'react'
import { Link, useParams } from 'react-router-dom'

//css:
import './BlogDetails.css'

// DB:
import BlogDB from '../utils/BlogDB.json'
import VerticalProgressBar from '../components/modules/ProgressBar'
import { Avatar, CardContent, Divider, Typography } from '@mui/material'

//icons:
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function BlogDetails() {
    const { id } = useParams()
    const blogId = parseInt(id, 10);
    const BlogPost = BlogDB.find((blog) => blog.id === blogId)
    return (
        <div>
            <div className='Home' id='heroBlogDetails'  >
                <div>
                    <div className='image_container_blog_details' >
                        <img src={BlogPost.imageData} alt={BlogPost.imageData} id='imageResponsive' />
                    </div>
                </div>
                <div>
                    <div className='Data_Container'>
                        <div className='tags' dir='rtl' id='hashtagsDetails' style={{marginBottom:"1rem"}}>
                            {
                                BlogPost.hashtags.map((tag) => (
                                    <Link className='link' to={`/${tag}`} key={tag}>#{tag}</Link>
                                ))
                            }
                        </div>
                        <h1 style={{color:"#F9FAFB !important"}} dir='rtl'>{BlogPost.title}</h1>
                        <h2 style={{color:"#D0D5DD !important"}} dir='rtl'>{BlogPost.description}</h2>
                        <p style={{color:"#FFF !important"}} dir='rtl'>نوشته شده توسط {BlogPost.author.name}</p>
                    </div>
                </div>
            </div>

            <div className='mainContentBlogDetails'>
                <div className='ContentTextBlogDetails'>    
                    <div>
                        <p style={{color: "#475467"}} dir='rtl'>{BlogPost.detailsDescription1}</p>
                        <p style={{color: "#475467"}} dir='rtl'>{BlogPost.detailsDescription2}</p>
                        <p style={{color: "#475467"}} dir='rtl'>{BlogPost.detailsDescription3}</p>
                    </div>
                    <div className='BlogDetailsPictures'>
                        <img src={BlogPost.descriptionImage1} alt={BlogPost.descriptionImage2} className='BlogDetailsPicture' />
                        <img src={BlogPost.descriptionImage2} alt={BlogPost.descriptionImage2} className='BlogDetailsPicture' />
                    </div>
                    <div className='BlogDetailsSummery'>
                        <p dir='rtl' style={{color: "#475467"}}>{BlogPost.detailsDescription4}</p>
                        <h1 dir='rtl' style={{color:"#4CA773"}}>"{BlogPost.title}"</h1>
                        <p dir='rtl' style={{color: "#475467"}}>{BlogPost.detailsDescription4}</p>
                    </div>
                    <div className='BlogPostInfo'>
                        <div className='tags' id='hashtagsDetails' dir='rtl'>
                            {
                                BlogPost.hashtags.map((tag)=> (
                                    <Link className='link' to={`/blog/${tag}`} style={{background: 'rgba(0, 0, 0, 0.65)',color:"#FFF"}}>#{tag}</Link>
                                ))
                            }
                        </div>

                        <Divider/>

                        <div className='authorInfo'>
                            <CardContent style={{ direction: "rtl", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                                <Avatar src={''} alt={'authorName'} style={{ marginLeft: 10, objectFit:'cover' }} />
                                <div>
                                    <div>
                                        <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1" color={'#475467'}>
                                            {'authorName'}
                                        </Typography>
                                        <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color={"#98A2B3"} >
                                            {'authorDescription'}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                            <div className='authorIcons'>
                                <Link to={BlogPost.author.linkedin} ><FaLinkedin       size={25} color='#495057' /></Link>
                                <Link to={BlogPost.author.pinterest}><FaPinterest      size={25} color='#495057' /></Link>
                                <Link to={BlogPost.author.twitterX} ><FaSquareXTwitter size={25} color='#495057' /></Link>
                                <Link to={BlogPost.author.facebook} ><FaFacebook       size={25} color='#495057' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='timeProgressBlogDetails' dir='rtl'>
                    <span>1402/1/4</span>
                    <span>----</span>
                    <span>4 دقیقه</span>
                    <VerticalProgressBar bgcolor={"#6AD095"} progress={"60"} width={"5px"}/>
                    <span id="dissapear">پایان</span>
                </div>
            </div>
            <div className=''>

            </div>

        </div>
    )
}

export default BlogDetails