import React, { useState, useEffect } from 'react';
import '../../home.css'
import CountUp from 'react-countup';


const Event = () => {
    const [count, setCount] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', countUp);
    }, []);
    const countUp = () => {
        console.log(window.scrollY);
        if (window.scrollY > 5400 && window.scrollY < 6500) {
            setCount(true)

        } else {
            setCount(false)
        }
    }


    return (
        <>
            <div  data-aos='fade-up' className="about">
                <div className="BGIMAGE">
                    <img className='BGIMAGES' src="../../../../images/1.png" alt="note" />
                </div>
                <div className="BGSEC"></div>
                <div className="about-text">
                    <div className="about-text-title">
                        <h1 className="about-text-title-1">About Our University</h1>
                        <p className="about-text-title-2">Lebanese French University (LFU)</p>
                    </div>
                    <div className="about-text-paragraph">
                        Lebanese French University (LFU) is a leading private
                        university. It was licensed in September 2007 by the
                        Kurdistan Regional Government–Erbil (decree 2342). Being
                        registered and approved by the Ministry of Higher Education
                        and Scientific Research in Kurdistan Region, LFU
                        becomes the ideal institution where
                        young as well as mature students can
                        study without immigrating abroad.
                  </div>
                </div>
                <div className="about-anime">
                    <div className="about-anim">
                        <div className="about-anim-container">
                            <div className="about-anim-container-secu">
                                <i class="fas fa-graduation-cap about-anim-container-secu-icon"></i>
                            </div>
                            <h1 className="about-anim-container-num">{count && <CountUp end={346} />}</h1>
                            <p className="about-anim-container-title">Graduation</p>
                        </div>
                    </div>
                    <div className="about-anim">
                        <div className="about-anim-container">
                            <div className="about-anim-container-secu">
                                <i class="fas fa-user-friends about-anim-container-secu-icon" > </i>
                            </div>
                            <h1 className="about-anim-container-num">{count && <CountUp end={6324}/>}</h1>
                            <p className="about-anim-container-title">Student enrolled</p>
                        </div>
                    </div>
                    <div className="about-anim">
                        <div className="about-anim-container">
                            <div className="about-anim-container-secu">
                                <i class="fas fa-user-check about-anim-container-secu-icon" ></i>
                            </div>
                            <h1 className="about-anim-container-num">{count && <CountUp end={386}/>}</h1>
                            <p className="about-anim-container-title">Staff</p>
                        </div>
                    </div>
                    <div className="about-anim">
                        <div className="about-anim-container">
                            <div className="about-anim-container-secu">
                                <i class="fas fa-building about-anim-container-secu-icon"></i>
                            </div>
                            <h1 className="about-anim-container-num">{count && <CountUp end={22}/>}</h1>
                            <p className="about-anim-container-title">Departments</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default Event;