import React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '../components/modules/Blog-modules/BlogCard';

function Blog() {
    const cardData = [
        {
            id:1,
            imageData:"/public/assets/prof.jpg",
            date: Date.now(),
            title:"متن تست شماره 1",
            description:"توضیحات تست 1",
            author:{
                name:"نام نویسنده",
                picture:"/public/assets/prof.jpg",
                description:"درباره نویسنده"
            }
        },
        {
            id:2,
            imageData:"/public/assets/prof.jpg",
            date: Date.now(),
            title:"متن تست شماره 2",
            description:"توضیحات تست 1",
            author:{
                name:"نام نویسنده",
                picture:"/public/assets/prof2.jpg",
                description:"درباره نویسنده"
            }
        },
        {
            id:3,
            imageData:"/public/assets/prof.jpg",
            date: Date.now(),
            title:"متن تست شماره 3",
            description:"توضیحات تست 1",
            author:{
                name:"نام نویسنده",
                picture:"/public/assets/prof2.jpg",
                description:"درباره نویسنده"
            }
        },
        {
            id:3,
            imageData:"/public/assets/prof.jpg",
            date: Date.now(),
            title:"متن تست شماره 3",
            description:"توضیحات تست 1",
            author:{
                name:"نام نویسنده",
                picture:"/public/assets/prof2.jpg",
                description:"درباره نویسنده"
            }
        }
    ]

    return (
        <div>
        <h1>BLOG</h1>
        <Grid container spacing={3}>
            {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
                {/* Adjust the xs, sm, and md values to control the number of cards per row */}
                <BlogCard
                imageData={card.imageData}
                date={card.data}
                title={card.title}
                description={card.description}
                authorName={card.author.name}
                authorDescription={card.author.description}
                authorPicture={card.author.picture}
                />
            </Grid>
            ))}
        </Grid>
        </div>
    );
}

export default Blog;
