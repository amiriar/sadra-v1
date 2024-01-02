import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Divider } from '@mui/material';

const BlogCard = ({ imageData, date, title, description, authorName, authorDescription, authorPicture }) => {
    console.log(date);
    return (
        <Card style={{ marginBottom: 20, borderRadius: '0.5rem', textAlign:"right" }}>
            {/* Card Content */}
            <CardContent>
                {/* Image */}
                <div style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
                    <img src={imageData} alt="Card Image" style={{ aspectRatio:"2/1.5",width: '100%', height: 'auto', borderRadius: '0.5rem' }} />
                </div>

                {/* Date */}
                <Typography variant="subtitle2" color="textSecondary" style={{ marginTop: 10 }}>
                    {date || "test"}
                </Typography>

                {/* Title */}
                <Typography variant="h5" component="div" style={{ marginTop: 10 }}>
                    {title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 10 }}>
                    {description}
                </Typography>
            </CardContent>

            {/* Divider */}
            <Divider />

            {/* Author Information */}
            <CardContent style={{ direction:"rtl", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                <Avatar src={authorPicture} alt={authorName} style={{ marginLeft: 10 }} />
                <div>
                    <Typography variant="subtitle1">{authorName}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {authorDescription}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
