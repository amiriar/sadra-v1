import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Divider } from "@mui/material";
import { BiCalendar, BiTime } from "react-icons/bi";
import './EventCard.css'
const EventCard = ({ image, title, price, teacher, date, time , discount }) => {
  return (
    <div className="CardEvent">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        maxHeight = {60}
        image={image}
        alt={title}
      />
      <div className="MainDetial">
      <CardContent>
        <Typography sx={{minWidth : 240 , maxWidth : 240 , minHeight : 60 , maxHeight : 60}} gutterBottom variant="h5">
         <span id="eventCardTitle">{title}</span>
        </Typography>
        <div className="CardEventDetail">
        <Typography variant="h6" sx={{paddingLeft : 2}} color="text.secondary">
           <span style={{display : "flex"}}>
           {
            Number(discount) ? (
                <div>
                <span id="price_discount">{price}</span>
                <span id="price">{!price * (100 - Number(discount)) / 100 ? null : <span>رایگان</span> }</span>
                </div>
            ) : <span id="price">{price} <span id="rial">هزارتومان</span> </span>
           }
           </span>
        </Typography>
        <Typography sx={{fontSize : 17}} variant="h6" color="text.secondary">
          {teacher}
        </Typography>
        </div>
      </CardContent>
      </div>
      <Divider />
      <CardActions disableSpacing>
        <IconButton aria-label="date">
          <BiCalendar />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <IconButton aria-label="time">
          <BiTime />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {time}
        </Typography>
      </CardActions>
    </Card>
    </div>
  );
};

export default EventCard;
