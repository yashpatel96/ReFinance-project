import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Link } from '@mui/material'

const NewsComp = (props) => {

  const { image, title, description, link } = props;

  return (
    <Card sx={{ mb: 2, boxShadow: 2 }}>
      <Link href={link} sx={{ color: 'black' }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia
            component="img"
            height="100"
            image={image}
            alt={title}
          />
          <CardContent sx={{
            '&:hover': {
              color: "#1a28a8",
            },
          }}>
            <Typography variant="h6" >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
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