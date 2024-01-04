import React from 'react'
import { Link, useParams } from 'react-router-dom'

//css:
import './BlogDetails.css'

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

// variables:
let counter = 0;

function BlogDetails() {
    const { id } = useParams()
    const blogId = parseInt(id, 10);
    const BlogPost = BlogDB.find((blog) => blog.id === blogId)

    const reliablePost1 = BlogDB.find((blog) => blog.id === 1)
    const reliablePost2 = BlogDB.find((blog) => blog.id === 2)
    const reliablePost3 = BlogDB.find((blog) => blog.id === 3)

    return (
        <div style={{ maxWidth:"1920px" ,margin:"0 auto"}}>
            <div className='Home' id='heroBlogDetails'>
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
                                    <Link className='link' key={tag} to={`/blog/${tag}`} style={{background: 'rgba(0, 0, 0, 0.65)',color:"#FFF"}}>#{tag}</Link>
                                ))
                            }
                        </div>

                        <br />
                        <Divider/>
                        <br />

                        <div className='authorInfo'>
                            <CardContent style={{ direction: "rtl", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                                <Avatar src={BlogPost.author.picture} alt={'authorName'} style={{ marginLeft: 10, objectFit:'cover' }} />
                                <div>
                                    <div>
                                        <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1" color={'#475467'}>
                                            {BlogPost.author.name}
                                        </Typography>
                                        <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color={"#98A2B3"} >
                                            {BlogPost.author.description}
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
                    <div className='BlogRelatablePosts'>
                        <h3 dir='rtl'>پست های مرتبط</h3>
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
                </div>
                <div className='timeProgressBlogDetails' dir='rtl'>
                    <span>1402/1/4</span>
                    {/* <span><Line/></span> */}
                    <span>4 دقیقه</span>
                    <VerticalProgressBar bgcolor={"#6AD095"} progress={"60"} width={"5px"}/>
                    <span id="dissapear">پایان</span>
                </div>
            </div>

        </div>
    )
}

export default BlogDetails