import React from 'react'
import './LongSubMain.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

import swipe_item from '../../../assists/swipe_item.png'
import swipe_item1 from '../../../assists/swipe_item1.png'
import swipe_item2 from '../../../assists/swipe_item2.png'
import swipe_item3 from '../../../assists/swipe_item3.png'
import swipe_item4 from '../../../assists/swipe_item4.png'
import swipe_item5 from '../../../assists/swipe_item5.png'
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';

const LongSubMain = () => {
  return (
    <div className='LongSubMain_container'>
      <h3>Popular items this season</h3>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={6}
        >
        <SwiperSlide key='1' className='testmonial'>
          <div className='small_card'>
            <label>Accessories</label>
            <img src={swipe_item} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item1} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item2} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item3} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item4} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item5} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item1} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item2} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <h3>Popular items this season</h3>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={6}
        >
        <SwiperSlide key='1' className='testmonial'>
          <div className='small_card'>
            <label>Accessories</label>
            <img src={swipe_item} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item1} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item2} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item3} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item4} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item5} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item1} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item2} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <h3>Popular items this season</h3>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={6}
        >
        <SwiperSlide key='1' className='testmonial'>
          <div className='small_card'>
            <label>Accessories</label>
            <img src={swipe_item} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item1} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item2} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item3} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item4} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item5} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item1} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className='small_card'>
            <label>Cosmetics & perfumes</label>
            <img src={swipe_item2} alt="card_img"/>
            <h2>Card 1</h2>
            <p>Shop now</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default LongSubMain
