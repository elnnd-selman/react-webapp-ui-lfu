import React from 'react';
import '../../home.css'
const MediaControlCard = ({list}) => {

    return (
        <>
            <article className="event-card">
                <figure className='event-card-figure'>
                    <img className='event-card-figure-image' src={list.src} alt="" />
                </figure>
                <div className="event-card-container">
                    <div className="event-card-container-header"><span className="event-card-container-header-dateNum">{list.date.day}</span><span className='event-card-container-header-dateMonth'>{list.date.month} </span></div>
                    <div className="event-card-container-main">
                        <h1 className="event-card-container-main-title">{list.title}</h1>
                    </div>


                    {/* <div className="event-card-container-time">
                        <p className="event-card-container-time-self">23/3/2021 TO 26/3/2021 </p>
                    </div> */}
                    {/* <div className="event-card-container-paragraph">
                       {list.text}
                    </div> */}

                </div>
            </article>
        </>
    )
}
export default MediaControlCard;
