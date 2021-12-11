import React from 'react'
import '../home.css';
import NewsSlider from './newsSlider';
import Grid from './grid'
import Zigzag from './zigzagSlide'
function News() {
    return (
        <>

            <div className="news-title">
                <p className="news-title-self"> NEWS<span className="news-title-self-views">VIEWS All</span></p>
            </div>


            <Grid />

            {/* <div className="news-slider">
                <NewsSlider />
            </div> */}



        </>
    )
}

export default News;