import React from 'react'
import './EventDetailCard.css'
const EventDetailTeacherCard = ({name , career , techerProfile}) => {
  return (
    <div className='detailCard'>
      <img src={techerProfile} />
      <h2>{name}</h2>
      <p>{career}</p>
    </div>
  )
}

export default EventDetailTeacherCard
