import React, { useState } from 'react'
// import propTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import '../../home.css'
import SI from './swiperitem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { dataEvent } from '../../../../data-event'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
let data = dataEvent;
function LIST() {


    return (

        <Swiper
            className="event-slide"
            loop={true}

            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                waitForTransition: true
            }}

            spaceBetween={40}
            slidesPerView={3}

        >
            {data.map((list) => {
                return (
                    <SwiperSlide className="event-slide-item" >

                    <SI list={list} />

                </SwiperSlide>
                )
            })}



        </Swiper>
    )



};






export default LIST;