import React from 'react'
import Slider from "react-slick";
import bts_7 from '../resources/images/bts_7.jpg';
import bts_3 from '../resources/images/bts_3.jpg';
import bts_9 from '../resources/images/bts_9.png';
import bts_10 from '../resources/images/bts_10.jpg';

const Carrousel = () => {
  const settings = {
    //test
    autoplay: true,
    dots: false,
    infinite: true,
    // time for each slide
    autoplaySpeed: 4500,
    // slowspeed
    speed: 800,
    arrows: true,
    pauseOnHover: false

  };
  return (
    <div className="carrousel_wrapper"
      style={{
        // inline css가 우선시된다. window의높이를 측정해서 reload될대마다 동적으로맞게 출력.
        height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}>
      <Slider {...settings}>
        <div>
          <div className="carrousel_image"
            style={{
              background: `url(${bts_9}) center`,
              height: `${window.innerHeight}px`
            }}>
          </div>
        </div>
        <div>
          <div className="carrousel_image"
            style={{
              background: `url(${bts_10}) center`,
              height: `${window.innerHeight}px`
            }}>
          </div>
        </div>
        <div>
          <div className="carrousel_image"
            style={{
              background: `url(${bts_7}) center`,
              height: `${window.innerHeight}px`
            }}>
          </div>
        </div>
        <div>
          <div className="carrousel_image"
            style={{
              background: `url(${bts_3}) center`,
              height: `${window.innerHeight}px`
            }}>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carrousel
