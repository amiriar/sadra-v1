import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Divider } from '@mui/material';
import { FaStar, FaCalendarAlt, FaLevelUpAlt } from 'react-icons/fa';
import { CiClock2 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdOutlineStackedBarChart } from "react-icons/md";
const CardPopular = ({ thumbnail, teacher, rate, price, time, level , lessons , title , discount}) => {
  return (
    <Card sx={{ maxWidth: 300 , minWidth : 300 , maxHeight : 412 , minHeight : 412 ,  borderRadius : 3.9 }}>
    <CardMedia
        sx={{maxHeight : 170}}
        component="img"
        height="170"
        image={thumbnail}
        alt={teacher}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      <span>{title}</span>
    </Typography>
    <div style={{display : "flex" , alignItems : "center" , justifyContent : "space-between" , height : 112}}>
    <Typography gutterBottom variant="h5" component="div">
    <span style={{display : "flex" , alignItems : "center" , justifyContent : "center"}} >
    <p>استاد {teacher}</p>
    </span>
    </Typography>
    <Typography sx={{display : "flex" , alignItems : "center" , justifyContent : "space-between"}} variant="body2" color="text.secondary">
        <FaStar style={{color : "gold" , margin : 5}} /> {rate}
      </Typography>
      <Typography variant="h6" component="div">
      <div>
        
      <span style={{display : "flex"}}>
           {
            Number(discount) ? (
            <div>
            <span id="price">{price * (100 - Number(discount)) / 100 ? (
            <div style={{display : "flex" , flexDirection : "column" , position : "relative" , alignItems : "center" , justifyContent : "center"}}>
              <span>{price * (100 - Number(discount)) / 100}</span><span style={{fontSize : 12}} >هزارتومان</span>
            <span style={{ opacity : 0.5 , fontSize : 16 ,position : "absolute" ,top : -38 , textDecoration : "line-through" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}} >{price} <span style={{position : "absolute" , top : 13}} >هزارتومان</span> </span>
            <span style={{position : "absolute" , top : -250 , color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000}} >{discount}%</span>
            </div>
            ) : (
                <div style={{position : "relative"}}>
                <span style={{ opacity : 0.5 ,position : "absolute" , top : -45 , right : 15 , fontSize : 17 , textDecoration : "line-through"}} >{price} <span style={{position : "absolute" , right : -17, top : 14}} >هزارتومان</span></span>
                <span style={{fontWeight : 700}} >رایگان</span>
                </div>
                )}</span>
            </div>
            ) : <span id="price">{price} <span id="rial">هزارتومان</span></span>
           }
      </span>
        
      </div>
      </Typography>
      </div>
    </CardContent>
    <Divider />
    <CardActions>
      <IconButton aria-label="time">
        <CiClock2 /> <Typography> <p>{time} دقیقه </p></Typography>
      </IconButton>
      <IconButton aria-label="lessons">
        <GoStack style={{padding : 1}} /> <Typography><p> <span>درس</span> {lessons}</p></Typography>
      </IconButton>
      <IconButton aria-label="level">
        <MdOutlineStackedBarChart  /> <Typography><p> <span>سطح</span> {level}</p></Typography>
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default CardPopular
