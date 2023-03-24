import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';

import './Banner.css'
import banner_img from '../../../assists/banner_img.png'
import banner_img1 from '../../../assists/banner_img1.png'
const Banner = () => {
  return (
    <div className='banner_container'>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        >
        <SwiperSlide key='1' className='testmonial'>
          <div className='banner_card A'>
            <h1>Clean Beauty from CAY SKIN</h1>
            <p>Protect against sun damage and get a natural-looking glow with SPF products for all skin tones.</p>
            <h1>SNAP IT UP▸</h1>
            <div><img src={banner_img} alt='img'/></div>
          </div>
        </SwiperSlide>
      <SwiperSlide key='2' className='testmonial'>
          <div className='banner_card B'>
            <h1>The Natural Sculpted Look</h1>
            <p>You're seeing it everywhere. Here's how to get it.You're seeing it everywhere. Here's how to get it.</p>
            <h1>SHOP NOW▸</h1>
            <div><img src={banner_img1} alt='img'/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='3' className='testmonial'>
          <div className='banner_card A'>
            <h1>Clean Beauty from CAY SKIN</h1>
            <p>Protect against sun damage and get a natural-looking glow with SPF products for all skin tones.</p>
            <h1>SNAP IT UP▸</h1>
            <div><img src={banner_img} alt='img'/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='4' className='testmonial'>
          <div className='banner_card B'>
            <h1>The Natural Sculpted Look</h1>
            <p>You're seeing it everywhere. Here's how to get it.You're seeing it everywhere. Here's how to get it.</p>
            <h1>SHOP NOW▸</h1>
            <div><img src={banner_img1} alt='img'/></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
