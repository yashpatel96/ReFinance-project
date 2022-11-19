import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Link } from '@mui/material'
import './News_comp.css'
//import moment from 'moment'

const NewsComp = (props) => {

  const { image, title, description, link, uploaded_datetime } = props;
  const uploadedDate =  moment.unix(uploaded_datetime).format('LL') // uploaded_datetime
  /* '&:hover': { color: "#1a28a8", }, */

  return (
    <Card className='news_card' rel="noopener" sx={{ width: "770px", mb: 2, boxShadow: 2 }}>
      <Link href={link} target="_blank" sx={{ color: 'black' }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
          {image ?
            <div className="imageCard">
              <CardMedia
                component="img"
                image={image}
                alt={title}
                className="image"
              />
            </div>
            : ""
          }
          <CardContent>
            <Typography variant="h6" className="news_title">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              mb: 0.5
            }}>
              {description}
            </Typography>
            <Typography variant="caption" >
              Uploaded on: {uploadedDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}


export default NewsComp;

/* <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="news_card" >

          <div className={image === "" ? '' : 'news_image'}>
            <img src={image} alt="" />
          </div>

          <div className='news_text'>
            <div className='title'>
              <h3>
                {title}
              </h3>
            </div>

            <div className='description'>
              <p>{description}</p>
            </div>
          </div>

        </div>
      </a>
       */