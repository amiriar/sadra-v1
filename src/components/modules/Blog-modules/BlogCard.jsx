import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Divider } from '@mui/material';

const BlogCard = ({ imageData, date, title, description, author }) => {
    return (
        <Card>
        {/* Card Header */}
        <CardHeader
            avatar={<Avatar src={author.picture} alt={author.name} />}
            title={author.name}
            subheader={author.description}
        />

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
        <CardContent>
            <Avatar src={author.picture} alt={author.name} style={{ marginRight: 10 }} />
            <div>
            <Typography variant="subtitle1">{author.name}</Typography>
            <Typography variant="body2" color="textSecondary">
                {author.description}
            </Typography>
            </div>
        </CardContent>
        </Card>
    );
};

export default BlogCard;
