import { Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function VideoComponent({ UrlAutorName,video }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            console.log(UrlAutorName);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    const navigate = useNavigate()

    function clickHandlerUrl({ name }) {
        navigate(`/student/${name}`)
    }

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
                <div className='responsiveVideoTexts' onClick={() => clickHandlerUrl({name: UrlAutorName.name})}>
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
