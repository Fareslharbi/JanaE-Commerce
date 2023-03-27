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
  const dict_offers = [
    {
      id: 1,
      img: swipe_item,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 2,
      img: swipe_item1,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 3,
      img: swipe_item2,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 4,
      img: swipe_item3,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 5,
      img: swipe_item4,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 6,
      img: swipe_item5,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 7,
      img: swipe_item5,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
    {
      id: 8,
      img: swipe_item5,
      title:  'Complimentary La Mer Skincare Duo',
      desc: "Try 14 samples of EADEMs bestselling Milk Marvel Serum",
      desc1: "Complimentary with $150 La Mer purchase.* Beauty Insider members only. Online only *Exclusions/terms apply.",
      btn: 'Apply'
    },
  ]
  return (
    <div className='LongSubMain_container'>
      <h3>Jana's Offers</h3>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={6}
        >
        {
          dict_offers.map(({id, title, img, desc, desc1, btn}) => {
              return (
                <SwiperSlide key={id} >
                  <div className='offer_card'>
                    <img src={img} alt="card_img"/>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <p>{desc1}</p>
                    <button>{btn}</button>
                  </div>
                </SwiperSlide>
              ) 
              })
          }
      </Swiper>
    </div>
  )
}

export default OffersMain
