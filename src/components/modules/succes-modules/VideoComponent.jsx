import { Paper, Typography } from '@mui/material'
import React from 'react'

function VideoComponent({ video }) {
    return (
        <>
            <Paper elevation={3} >
                <video controls width="100%" poster={video.thumbnail}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Typography fontFamily={'Yekan,sans-serif'} variant="h6">{video.title}</Typography>
                <Typography fontFamily={'Yekan,sans-serif'} variant="subtitle1">{video.job}</Typography>
            </Paper>
        </>
    )
}

export default VideoComponent