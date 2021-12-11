// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {


    return (
        <Swiper
            className="prese-swiper"
            loop={true}
            autoplay={{ delay: 5000 }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >



            <SwiperSlide className="prese-swiper-item" >
                <div className="prese-swiper-item-info">
                    <p className="prese-swiper-item-info-qo">Lorem ipsum dolor sit amet consectetur  Porro eius aliquam modi rem adipisci similique, eligendi ipsam voluptas ex molestiae.</p>
                    <p className="prese-swiper-item-info-name">Mohammed Sdiq</p>
                    <p className="prese-swiper-item-info-deg"> Phd</p>
                </div>
                <div className="prese-swiper-item-image">
                    <figure className="prese-swiper-item-image-fig">
                        <img src="/images/4.jpg" alt="note" className="prese-swiper-item-image-fig-self" />
                    </figure>
                </div>
            </SwiperSlide>

        </Swiper>)

};
