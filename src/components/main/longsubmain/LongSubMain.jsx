import React from 'react'
import './LongSubMain.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';

import swipe_item from '../../../assists/swipe_item.png'
import swipe_item1 from '../../../assists/swipe_item1.png'
import swipe_item2 from '../../../assists/swipe_item2.png'
import swipe_item3 from '../../../assists/swipe_item3.png'
import swipe_item4 from '../../../assists/swipe_item4.png'
import swipe_item5 from '../../../assists/swipe_item5.png'


const LongSubMain = () => {
  const dict_categories = [
    {
      id: 1, 
      title: 'Accessories',
      img: swipe_item,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 2, 
      title: 'Accessories',
      img: swipe_item1,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 3, 
      title: 'Accessories',
      img: swipe_item2,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 4, 
      title: 'Accessories',
      img: swipe_item3,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 5, 
      title: 'Accessories',
      img: swipe_item4,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 6, 
      title: 'Accessories',
      img: swipe_item5,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 7, 
      title: 'Accessories',
      img: swipe_item3,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
    {
      id: 8, 
      title: 'Accessories',
      img: swipe_item1,
      desc: 'Card 1',
      shopLabel: 'Shop now',
    },
  ]
  return (
    <div className='mom'>
      <div className='LongSubMain_container'>
        <h3>Popular items this season</h3>
        <Swiper className="container small__container"
          // install Swiper modules
          modules={[ Pagination]}
          slidesPerView={6}
          >
          {
            dict_categories.map(({id, title, img, desc, shopLabel}) => {
              return (
                <SwiperSlide key='1' className='testmonial'>  
                  <div id={id} className='small_card'>
                    <label>{title}</label>
                    <img src={img} alt="card_img"/>
                    <h2>{desc}</h2>
                    <p>{shopLabel}</p>
                  </div>  
                </SwiperSlide>
              ) 
              })
          }
        </Swiper>
      </div>
      <div className='LongSubMain_container'>
        <h3>Popular items this season</h3>
        <Swiper className="container small__container"
          // install Swiper modules
          modules={[ Pagination]}
          slidesPerView={6}
          >
          {
            dict_categories.map(({id, title, img, desc, shopLabel}) => {
              return (
                <SwiperSlide key='1' className='testmonial'>  
                  <div id={id} className='small_card'>
                    <label>{title}</label>
                    <img src={img} alt="card_img"/>
                    <h2>{desc}</h2>
                    <p>{shopLabel}</p>
                  </div>  
                </SwiperSlide>
              ) 
              })
          }
        </Swiper>
      </div>
      <div className='LongSubMain_container'>
        <h3>Popular items this season</h3>
        <Swiper className="container small__container"
          // install Swiper modules
          modules={[ Pagination]}
          slidesPerView={6}
          >
          {
            dict_categories.map(({id, title, img, desc, shopLabel}) => {
              return (
                <SwiperSlide key='1' className='testmonial'>  
                  <div id={id} className='small_card'>
                    <label>{title}</label>
                    <img src={img} alt="card_img"/>
                    <h2>{desc}</h2>
                    <p>{shopLabel}</p>
                  </div>  
                </SwiperSlide>
              ) 
              })
          }
        </Swiper>
      </div>
    </div>
    
  )
}

export default LongSubMain


