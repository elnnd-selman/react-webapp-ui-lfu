// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { dataNews } from '../../../data-news'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Data = dataNews
export default () => {

    const [data, setData] = useState(Data)
    return (
        <Swiper
            className="news-slider-swiper"
            loop={true}
            autoplay={{ delay: 5000 }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {data.map((list) => {
                return (
                    <SwiperSlide className="news-slider-swiper-item" key={list.id}>
                        <article className="news-slider-swiper-item-container" >
                            <div className="news-slider-swiper-item-container-img">
                                <img className="news-slider-swiper-item-container-img-self" src={list.src} alt={list.title} />
                            </div>
                            <div className="news-slider-swiper-item-container-info">
                                <p className="news-slider-swiper-item-container-info-title">{list.title}</p>
                                <p className='news-slider-swiper-item-container-info-text'>{list.text}</p>
                                <span className='news-slider-swiper-item-container-info-date'><i className="fas fa-calendar-alt news-slider-swiper-item-container-info-date-icon"></i>{list.date}</span>
                                <button className='news-slider-swiper-item-container-info-btn'><Link className='news-slider-swiper-item-container-info-btn-a' to={`/news:${list.id}`}><p></p> Read More</Link></button>
                            </div>
                        </article>
                    </SwiperSlide>)
            })}
        </Swiper>
    );
};
