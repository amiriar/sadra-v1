import React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '../components/modules/Blog-modules/BlogCard';

//css
import './Blog.css'

function Blog() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const todaysDate =  `${month}/${date}/${year}`;
    const cardData = [
        {
            id:1,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:2,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:3,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:4,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:5,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:6,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        {
            id:7,
            imageData:"/public/assets/prof2.jpg",
            date: todaysDate,
            title:"آناتومی یک صفحه وب و عناصر اساسی آن 1",
            description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.",
            author:{
                name:"حسین اشرفی پور",
                picture:"/public/assets/prof.jpg",
                description:"طراح رابط کاربری و تجربه کاربر"
            },
            hashtags:['تکنولوژی','رابط کاربری']
        },
        
        

    ]

    return (
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
    );
}

export default Blog;
