import React from 'react'
import './VideoPlayer.css';

const VideoPlayer = (props) => {

  return (
    <div className='video'>
      <video
        controls
        poster={props.poster}
        src={props.video} 
      />
    </div>
  )
}

export default VideoPlayer
