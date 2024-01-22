import React, { useEffect, useState } from 'react'
import SignOutButton from '../SignOutButton'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Divider, Grid } from '@mui/material';
import BlogCard from '../../modules/Blog-modules/BlogCard'
import NewBlog from './NewBlog';
import { categories } from '../Categories';

function BlogsList() {
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [teacherBlog, setTeacherBlog] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard/token', { withCredentials: true })
            .then(response => {
            const { role, id } = response.data;
            setUserRole(role);
            setUserId(id);
            if (id) {
                axios.get(`http://localhost:3001/dashboard/blogs/${id}`)
                    .then(secondResponse => {
                    setTeacherBlog(secondResponse.data[0])
                    })
                    .catch(secondError => {
                    console.error('Second Request Error:', secondError.response ? secondError.response.data : secondError.message);
                });
            }
        })
        .catch(firstError => {
            console.error('First Request Error:', firstError.response ? firstError.response.data : firstError.message);
            setUserRole('error');
        });
    }, []);

    return (
        <>
        <div className='panelContainer'>
        {
            userRole === "teacher" ?
                <div className='userPanel' dir='rtl'>
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
                        <div className='blogCardsContainer-dash' style={{ marginTop: '5rem', marginBottom: '2rem' }}>
                            {teacherBlog.length !== 0 ? (
                                <Grid container spacing={3}>
                                {teacherBlog.map((blog) => (
                                    <Grid item key={blog.id} xs={12} sm={12} md={6} lg={4}>
                                        <BlogCard
                                            id={blog.id}
                                            imageData={blog.imageData}
                                            date={blog.date}
                                            title={blog.title}
                                            description={blog.description}
                                            authorName={blog.authorName}
                                            authorLastName={blog.authorLastName}
                                            authorDescription={blog.authorDescription}
                                            authorPicture={blog.authorPicture}
                                            hashtags={blog.hashtags}
                                        />
                                    </Grid>
                                ))}
                                </Grid>
                            ) : 
                                <p>شما تا به حال بلاگی ثبت نکرده اید.</p>
                            }
                        </div>
                        <br />
                        <Divider/>
                        <br />
                        <h3>برای ثبت بلاگ از فرم زیر استفاده کنید:</h3>
                        <br />
                        <>
                            <NewBlog/>
                        </>
                    </div>
                </div>
            :
            <h2>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h2>
        }
        </div>
        
        </>
    )
}

export default BlogsList