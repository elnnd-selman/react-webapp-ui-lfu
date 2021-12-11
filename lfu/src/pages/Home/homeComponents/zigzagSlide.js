// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '../../../data'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Data = data
export default () => {

    const [data, setData] = useState(Data)
    return (
        <Swiper className="news-zigzag-swiper"
            loop={true}

            longSwipes={true}
            longSwipesRatio={1}
            longSwipesMs={3000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={100}
            slidesPerView={2}

            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {data.map((list) => {
                return (
                    <SwiperSlide className="news-zigzag-swiper-list" key={list.id}>
                        <figure className="news-zigzag-swiper-list-figure">
                            <img className="news-zigzag-swiper-list-figure-self" src={list.src} alt="" />
                        </figure>
                    </SwiperSlide>)
            })}
        </Swiper>
    );
};
