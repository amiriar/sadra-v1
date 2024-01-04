import React from 'react'
import '../HomePageModule/CardEvent.css'
import { MdPlace } from 'react-icons/md'
import { CiCalendarDate } from 'react-icons/ci'
const EventCar = ({id, cardName ,Master, image, price, place , time}) => {
  // const { id, cardName ,Master, image, price, offer, place} = DataCard;

  return (
    <div className='Card' >
      <div className='image_con'>
        <img src={image}  />
      </div>

      <div className='Card_Data'>
          <h1>{cardName}</h1>

          <div className='more_detail'>
         

            <span id='prices'>
            <h2>{price}</h2>
            {/* {price === "رایگان" ? null : <p id='toman'>هزارتومان</p>} */}
            </span>

            <p>{Master}</p>
          </div>


          <div className='class_info'>
              <div className='time'>
              <p>{place.city}</p>
              <MdPlace  className='iconss' />
              </div>

              <div className='lessons'>
              <p>{time.year }</p>
              <CiCalendarDate className='iconss' />
              </div>

           

              
          </div>


      </div>
    </div>
  )
}

export default EventCar
