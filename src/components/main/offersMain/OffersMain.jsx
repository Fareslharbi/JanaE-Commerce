import React from 'react'
import './OffersMain.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

import swipe_item from '../../../assists/offer_img.png'
import swipe_item1 from '../../../assists/offer_img1.png'
import swipe_item2 from '../../../assists/offer_img2.png'
import swipe_item3 from '../../../assists/offer_img3.png'
import swipe_item4 from '../../../assists/offer_img4.png'
import swipe_item5 from '../../../assists/offer_img5.png'
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';

const OffersMain = () => {
  return (
    <div className='LongSubMain_container'>
      <h3>Jana's Offers</h3>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={6}
        >
        <SwiperSlide key='1' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item1} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item2} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item3} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item4} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item5} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item1} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='offer_swiper'>
          <div className='offer_card'>
            <img src={swipe_item2} alt="card_img"/>
            <h4>Complimentary La Mer Skincare Duo</h4>
            <p>Try 14 samples of EADEM’s bestselling Milk Marvel Serum</p>
            <p>Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.</p>
            <button>Apply</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default OffersMain
