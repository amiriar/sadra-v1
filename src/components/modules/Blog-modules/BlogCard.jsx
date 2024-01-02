import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Divider } from '@mui/material';

const BlogCard = ({ imageData, date, title, description, authorName, authorDescription, authorPicture }) => {
    return (
        <Card style={{ marginBottom: 20, textAlign:"right" }}>
        {/* Card Content */}
        <CardContent>
            {/* Image */}
            <img src={imageData} alt="Card Image" style={{ width: '100%', height: 'auto' }} />

            {/* Date */}
            <Typography variant="subtitle2" color="textSecondary" style={{ marginTop: 10 }}>
            {date}
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
        <CardContent style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', textAlign:"right" }}>
            <div>
            <Typography variant="subtitle1">{authorName}</Typography>
            <Typography variant="body2" color="textSecondary">
                {authorDescription}
            </Typography>
            </div>
            <Avatar src={authorPicture} alt={authorName} style={{ marginLeft: 10 }} />
        </CardContent>
        </Card>
    );
};

export default BlogCard;
