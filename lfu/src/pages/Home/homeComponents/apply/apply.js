import React, { useState, useEffect } from 'react';
import '../../home.css'
import cer from './cer.svg'
const Apply = () => {


    return (
        <>
            <div  data-aos='fade-up' className="Apply">
                <div className="BGIMAGEE">
                    <img className='BGIMAGEE-SS' src="../../../../images/2.png" alt="note" />
                </div>
                <div className="BGSECC"></div>
                <div className="Apply-text">
                    <div className="Apply-text-title">
                        <h1 className="Apply-text-title-1">Apply for admission</h1>
                        <p className="Apply-text-title-2">Fall 2020 applications are now open </p>
                        <button className='Apply-text-btn'>Apply Now</button>
                    </div>
                    <div className="Apply-text-paragraph">
                        We don’t just give students an education
                        and experiences that set them up for success
                        in a career. We help them succeed in their
                        career—to discover a field they’re
                        passionate about and dare to lead it.
                  </div>
                </div>
                <div className="Apply-grid">
                    <div className="Apply-grid-item">
                        <i class="fas fa-book Apply-grid-item-icon"></i>
                        <h1 className="Apply-grid-item-title">Education Services</h1>
                        <p className="Apply-grid-item-more">learn more</p>
                    </div>

                    <div className="Apply-grid-item">
                        <i class="fas fa-globe-americas Apply-grid-item-icon"></i>
                        <h1 className="Apply-grid-item-title">International Hubs
    </h1>
                        <p className="Apply-grid-item-more">learn more</p>
                    </div>

                    <div className="Apply-grid-item">
                        <img src={cer} alt="" className="Apply-grid-item-icon-image" />
                        <h1 className="Apply-grid-item-title-shaz">Bachelor’s and Master’s
</h1>
                        <p className="Apply-grid-item-more">learn more</p>
                    </div>

                    <div className="Apply-grid-item">
                        <i class="fas fa-school  Apply-grid-item-icon"></i>

                        <h1 className="Apply-grid-item-title">University Life
</h1>
                        <p className="Apply-grid-item-more">learn more</p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Apply;