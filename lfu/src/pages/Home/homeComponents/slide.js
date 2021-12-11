import React, { useState } from 'react'
// import propTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import '../home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import { dataNews } from '../../../data-news'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

let Data = dataNews
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function LIST() {

  const [data, setData] = useState(Data)

  return (

    <Swiper
      className="main-slide-slides"
      loop={true}

      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        waitForTransition: true
      }
      }

      spaceBetween={0}
      slidesPerView={1}

    >
      {data.map((list) => {
        return (
          <SwiperSlide className="main-slide-slides-item" key={list.id}>
            <article className="card" >
              <div className="card-image">
                <img className="card-image-self" src={list.src} alt={list.title} />
              </div>
              <div className="card-container">
                <h3 className="card-container-title">{list.title}</h3>
                <p className='card-container-text'>{list.text}</p>
                <span className='card-container-date'><i className="fas fa-calendar-alt card-container-date-icon"></i>{list.date}</span>
                <button className='card-container-btn'><Link className='card-container-btn-a' to={`/news:${list.id}`}>read more</Link></button>

              </div>
            </article>
          </SwiperSlide>)
      })}
    </Swiper>

  );
};






export default LIST;