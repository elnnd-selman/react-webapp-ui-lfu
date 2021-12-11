import React from 'react';
import '../../home.css'
import Swiper from './swiper'
import Swiper1 from './swiper2item'

const Event = () => {
    return (
        <>
            <div className="event">

                <div className="event-title">
                    <p className="event-title-self"> Events and Announcements<span className="event-title-self-views">VIEWS All</span></p>
                </div>
                <Swiper className='event-slide' />
                <br />
                <br />
                <Swiper1 className='event1-slide1' />
            </div>

        </>
    )
};
export default Event;