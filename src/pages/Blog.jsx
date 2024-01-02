import React from 'react'
import BlogCard from '../components/modules/Blog-modules/BlogCard'

function Blog() {

    const cardData = [
        {
            imageData:"/src/public/assets/prof.jpg",
            data: Date.now(),
            title:"title test 1",
            description:"description test 1",
            author:{
                name:"author name",
                picture:"/src/public/assets/prof2.jpg",
                description:"author description"
            }
        }
    ]
    return (
        <div>
            <h1>BLOG</h1>
            {
                cardData.map((card) => {
                    <BlogCard 
                        imageData={card.imageData} 
                        date={card.date} 
                        title={card.title} 
                        description={card.description} 
                        author={card.author} 
                    />
                })
            }
        </div>
    )
}

export default Blog