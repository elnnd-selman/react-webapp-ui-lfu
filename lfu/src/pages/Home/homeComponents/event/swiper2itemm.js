import React from 'react';
import '../../home.css'
const MediaControlCard = ({ list }) => {

    return (
        <>
            <article className="event1-card1">
                <figure className='event1-card1-figure1'>
                    <img className='event1-card1-figure1-image1' src={list.src} alt="" />
                </figure>
                <div className="event1-card1-container1">
                    <div className="event1-card1-container1-header1"><span className="event1-card1-container1-header1-dateNum1">{list.date.day}</span><span className='event1-card1-container1-header1-dateMonth1'>{list.date.month} </span></div>
                    <div className="event1-card-1container1-main1">
                        <h1 className="event1-card1-container1-main1-title1">{list.title}</h1>
                    </div>


                    <div className="event1-card1-container1-time1">
                        <p className="event1-card1-container1-time1-self1">23/3/2021 TO 26/3/2021 </p>
                    </div>
                    <div className="event1-card1-container1-paragraph1">
                        {list.text}
                    </div>

                </div>
            </article>
        </>
    )
}
export default MediaControlCard;
