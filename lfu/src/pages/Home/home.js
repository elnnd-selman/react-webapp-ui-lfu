import React, { useRef, useState ,useEffect} from 'react';
import './home.css'
import Slider from './homeComponents/slide'
import News from './homeComponents/news'
import Event from './homeComponents/event/event'
import About from './homeComponents/about/about'
import Apply from './homeComponents/apply/apply'
import Prese from './homeComponents/prese/prese'
import Tab from './homeComponents/tab/tab'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import Map from './homeComponents/map/map'
function Home() {
useEffect(() => {
    Aos.init({duration:2000})
    return () => {
      
    };
}, []);
    const [playAndPauseVideo, setPlayAndPauseVideo] = useState(true)
    const videoPlayAndPause = useRef(null)
    const handlePlayAndPauseVideo = () => {
        if (playAndPauseVideo) {
            videoPlayAndPause.current.pause()
            setPlayAndPauseVideo(false)
        } else if (!playAndPauseVideo) {
            videoPlayAndPause.current.play()
            setPlayAndPauseVideo(true)
        }
    }

    const [click, setClick] = useState(true)
    return (
        <>
            <div data-aos='fade-up' className="main">
                <div className="main-bg">

                </div>

                <div className={click ? "navbar2-search-active " : "navbar2-search "}  onMouseEnter={()=>{setClick(!click)}} onMouseLeave={()=>{setClick(!click)}}>
                    <input className={click ? "navbar2-search-active-self" : "navbar2-search-self"} type="text" placeholder="Search...." />
                    <button className={click ? "fas fa-search navbar2-search-active-btn" : "fas fa-search navbar2-search-btn"}></button>
 
                </div>
                <div className="main-video">
                    <video
                        ref={videoPlayAndPause}
                        className="main-video-self"
                        src="/images/bgvideo.mp4"
                        muted
                        autoPlay
                        loop>
                    </video>
                </div>

                <div className="main-slide">
                    <h2 className="main-slide-text">Lastest News</h2>
                    <Slider />

                </div>

                <div className="main-btn">
                    <button className="main-btn-self" onClick={handlePlayAndPauseVideo}>
                        {playAndPauseVideo ? <i className="fas fa-pause"></i> : <i className="fas fa-play">
                        </i>}
                    </button>
                </div>
            </div>

            <div  data-aos='fade-up'  className="news">
                <News />
            </div>
            <div data-aos='slide-right' className="event">
                <Event />
            </div>
            <Tab   />
            <Prese />
            <About />
            <Apply />
       
       
            {/* <Map /> */}
        </>
    )
}





export default Home;





