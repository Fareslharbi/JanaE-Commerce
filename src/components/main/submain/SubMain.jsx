import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';
import './SubMain.css'
import swipeImg from '../../../assists/swipeImg.jpg'
import swipeImg1 from '../../../assists/swipeImg1.jpg'
import swipeImg2 from '../../../assists/swipeImg2.jpg'
import swipeImg3 from '../../../assists/swipeImg3_1000x750.jpg'
import swipeImg4 from '../../../assists/swipeImg4.jpg'
import swipeImg5 from '../../../assists/swipeImg5.jpg'
const SubMain = () => {
  return (
    <div className='submain_container'>
      <div className='img_container'>
        <Swiper className="container testmonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={3}
        >
          <SwiperSlide key='1' className='testmonial_first'>
          <div class="card">
          <div>
            <img src={swipeImg} alt='logo'/>
          </div>
          <div className='swip_img_desc'>
            <h2>Trending Clean Makeup</h2>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <h3>SHOP NOW <AiOutlineArrowRight/></h3>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial_second'>
          <div class="card">
          <div>
            <img src={swipeImg1} alt='logo'/>
          </div>
          <div className='swip_img_desc'>
            <h2>Trending Clean Makeup</h2>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <h3>SHOP NOW <AiOutlineArrowRight/></h3>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='3' className='testmonial_third'>
          <div class="card">
          <div>
            <img src={swipeImg2} alt='logo'/>
          </div>
          <div className='swip_img_desc'>
            <h2>Trending Clean Makeup</h2>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <h3>SHOP NOW <AiOutlineArrowRight/></h3>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='4' className='testmonial_forth'>
          <div class="card">
          <div>
            <img src={swipeImg3} alt='logo'/>
          </div>
          <div className='swip_img_desc'>
            <h2>Trending Clean Makeup</h2>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <h3>SHOP NOW <AiOutlineArrowRight/></h3>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='5' className='testmonial_fifth'>
          <div class="card">
          <div>
            <img src={swipeImg4} alt='logo'/>
          </div>
          <div className='swip_img_desc'>
            <h2>Trending Clean Makeup</h2>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <h3>SHOP NOW <AiOutlineArrowRight/></h3>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key='6' className='testmonial_sixth'>
          <div class="card">
          <div>
            <img src={swipeImg5} alt='logo'/>
          </div>
          <div className='swip_img_desc'>
            <h2>Trending Clean Makeup</h2>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <h3>SHOP NOW <AiOutlineArrowRight/></h3>
          </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SubMain
