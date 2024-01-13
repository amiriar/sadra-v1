import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Divider } from "@mui/material";
import { BiCalendar, BiTime } from "react-icons/bi";
import './EventCard.css'
const EventCard = ({ image, title, price, teacher, date, time , discount }) => {
  return (
    <div className="CardEvent" >
    <Card sx={{ maxWidth: 345 , borderRadius : 3}}>
      <CardMedia
        component="img"
        maxheight = {60}
        image={image}
        alt={title}
      />
      <div className="MainDetial" style={{height : 200}}>
      <CardContent>
        <Typography fontFamily={'Yekan, sans-serif'} sx={{minWidth : 240 , maxWidth : 240 , minHeight : 90 , maxheight : 90 , fontSize : 19 }} gutterBottom variant="h6">
        <span id="eventCardTitle" style={{fontSize : 20 , fontWeight : 500}} >{title}</span>
        </Typography>
        <div className="CardEventDetail"  >
        <Typography fontFamily={'Yekan, sans-serif'} sx={{fontSize : 17 , fontWeight : 700}} variant="h6" color="text.secondary">
          <span>{teacher}</span>
        </Typography>
        <Typography fontFamily={'Yekan, sans-serif'} variant="h6" sx={{paddingLeft : 2}} color="text.secondary">
        <span style={{display : "flex"}}>
          {
            Number(discount) ? (
            <div>
            <span id="price">{price * (100 - Number(discount)) / 100 ? (
            <div style={{display : "flex" , flexDirection : "column" , position : "relative" , alignItems : "center" , justifyContent : "center"}}>
            <span>{price * (100 - Number(discount)) / 100}</span><span style={{fontSize : 12}} >هزارتومان</span>
            <span style={{ opacity : 0.5 , fontSize : 16 ,position : "absolute" ,top : -38 , textDecoration : "line-through" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}} >{price} <span style={{position : "absolute" , top : 13}} >هزارتومان</span> </span>
            <span style={{position : "absolute" , top : -270 ,left : -28, color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000}} >{discount}%</span>
            </div>
            ) : (
                <div style={{position : "relative"}}>
                <span style={{ opacity : 0.5 ,position : "absolute" , top : -45 , right : 15 , fontSize : 17 , textDecoration : "line-through"}} >{price} <span style={{position : "absolute" , right : -17, top : 14}} >هزارتومان</span></span>
                <span style={{fontWeight : 700}} >رایگان</span>
            <span style={{position : "absolute" , top : -278 ,left : -28, color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000}} >{discount}%</span>
                </div>
                )}</span>
            </div>
            ) : (
              <span id="price">{price} <span id="rial">هزارتومان</span></span>
            )
          }
      </span>
        </Typography>
        </div>
      </CardContent>
      </div>
      <Divider />
        <div className="bottom" style={{ display : "flex" , alignItems : "center" , justifyContent : "center"}} >
      <CardActions disableSpacing>
        <IconButton aria-label="date">
          <BiCalendar />
        </IconButton>
        <Typography fontFamily={'Yekan, sans-serif'} sx={{fontSize : 15}} variant="h1" color="text.secondary">
          <p style={{fontSize : 15}} >{date.split(" ")[0]}/{date.split(" ")[1]}/{date.split(" ")[2]}</p>
        </Typography> 
        <IconButton aria-label="time">
          <BiTime />
        </IconButton>
        <Typography fontFamily={'Yekan, sans-serif'} sx={{fontSize : 15}} variant="h1" color="text.secondary">
          <p style={{fontSize : 15}}>{time.split(" ")[0]}:{time.split(" ")[1]}:{time.split(" ")[2]}</p>
          
        </Typography>
      </CardActions>
        </div>
    </Card>
    </div>
  );
};

export default EventCard;
