import { Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';

function VideoComponent({ video }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div style={{ position: 'relative' }} className='successVideoContainer'>
        <Paper elevation={0} onClick={handleVideoClick}>
            <video
                className='successVideo'
                ref={videoRef}
                width='100%'
                poster={video.thumbnail ? video.thumbnail : ''}
                controls={isPlaying}
                onEnded={handleVideoEnded}
            >
                <source src={video.src} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div
                className='successBoxShadow'
                style={{ display: isPlaying ? 'none' : 'block' }}
            ></div>
            <div className='successVideoInformation' style={{ display: isPlaying ? 'none' : 'flex' }}>
                <div className='responsiveVideoTexts'>
                    <Typography fontFamily={'Yekan,sans-serif'} variant='h6'>
                        {video.title}
                    </Typography>
                    <Typography fontFamily={'Yekan,sans-serif'} variant='subtitle1'>
                        {video.job}
                    </Typography>
                </div>
                <div>
                    <IoPlayOutline size={50} />
                </div>
            </div>
        </Paper>
        </div>
    );
}

export default VideoComponent;
