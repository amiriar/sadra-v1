import React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '../components/modules/Blog-modules/BlogCard';

//css
import './Blog.css'
import SearchBox from '../components/modules/SearchBox';
import { Link } from 'react-router-dom';

function Blog() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const todaysDate =  `${month}/${date}/${year}`;
    const cardData = [
        {
            id:1,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:2,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:3,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:4,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:5,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:6,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:7,
            imageData:"/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        
        

    ]

    const tags = ['دورکاری','کامپوترها','یادگیری_ماشین','طراحی_گرافیک','رابط_کاربری','تکنولوژی','پایگاه_داده','هوش_مصنوعی','امنیت','بیت_کوین','فرانت_اند','بک_اند','سیو','ارز_دیجیتال','فارکس','کریپتو','بازی']
    let tagsCounter = 0;

    return (
        <>
            <div className='hero'>
                <div className='Data_Container_hero'>
                    <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
                    <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
                    <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
                    <SearchBox firstWidth={'100%'} />
                    <div className='tags' dir='rtl'>
                        
                        {
                            tags.map((tag) => {
                                tagsCounter+=1
                                return tagsCounter < 20 ? <Link to={`/${tag}`} className='tag'>#{tag}</Link> : null
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='blogCardsContainer'> 
                <Grid container spacing={3}>
                    {cardData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        {/* Adjust the xs, sm, and md values to control the number of cards per row */}
                        <BlogCard
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
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default Blog;
