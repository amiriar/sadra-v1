import React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '../components/modules/Blog-modules/BlogCard';

//css
import './Blog.css'
import SearchBox from '../components/modules/SearchBox';
import { Link } from 'react-router-dom';

// DB:
import BlogDB from '../utils/BlogDB.json'

function Blog() {
    const tags = ['دورکاری','کامپوترها','یادگیری_ماشین','طراحی_گرافیک','رابط_کاربری','تکنولوژی','پایگاه_داده','هوش_مصنوعی','امنیت','بیت_کوین','فرانت_اند','بک_اند','سیو','ارز_دیجیتال','فارکس','کریپتو','بازی']
    let tagsCounter = 0;

    return (
        <>
            <div className='hero' style={{maxWidth:"1920px", margin:"0 auto"}}>
                <div className='Data_Container_hero'>
                    <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
                    <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
                    <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
                    <SearchBox firstWidth={'100%'} />
                    <div className='tags' dir='rtl'>
                        {
                            tags.map((tag) => (
                                <Link to={`/blog/tags/${tag}`} className='tag'>#{tag}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='blogCardsContainer' style={{marginTop:"5rem", marginBottom:"2rem"}}> 
                <Grid container spacing={3}>
                    {
                        BlogDB.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                {/* Adjust the xs, sm, and md values to control the number of cards per row */}
                                <BlogCard
                                    id={card.id}
                                    imageData={card.imageData}
                                    date={card.date}
                                    title={card.title}
                                    description={card.description}
                                    authorName={card.author.name}
                                    authorDescription={card.author.description}
                                    authorPicture={card.author.picture}
                                    hashtags={card.hashtags}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </>
    );
}

export default Blog;
