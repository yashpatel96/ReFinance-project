import React from 'react';
import './News_comp.css';
//import company_news from './company-news';

const NewsComp = (props) => {

  const { image, title, description, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
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
  )
}


export default NewsComp;