import React from 'react'
import { useParams } from 'react-router-dom'

// DB:
import BlogDB from '../utils/BlogDB.json'

function BlogDetails() {
    const { id } = useParams()
    const blogId = parseInt(id, 10);
    const BlogPost = BlogDB.find((blog) => blog.id === blogId)
    return (
        <div>FaArrowLeft
            <div className='Home'>
                <div className='image_container'>
                    <img src={BlogPost.imageData} alt={BlogPost.imageData} />
                </div>

                <div className='Data_Container'>
                    <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
                    <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
                    <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
                </div>
            </div>dw
        </div>
    )
}

export default BlogDetails