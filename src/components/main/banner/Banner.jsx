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
  const dict_banner = [
    {
      id: 1, 
      title: 'Clean Beauty from CAY SKIN',
      desc: 'Protect against sun damage and get a natural-looking glow with SPF products for all skin tones.',
      label: 'SNAP IT UP▸',
      img: banner_img,
      classID: 'banner_card A'
    },
    {
      id: 2, 
      title: 'The Natural Sculpted Look',
      desc: "You're seeing it everywhere. Here's how to get it.You're seeing it everywhere. Here's how to get it.",
      label: 'SHOP NOW▸',
      img: banner_img1,
      classID: 'banner_card B'
    },
    {
      id: 3, 
      title: 'Clean Beauty from CAY SKIN',
      desc: 'Protect against sun damage and get a natural-looking glow with SPF products for all skin tones.',
      label: 'SNAP IT UP▸',
      img: banner_img,
      classID: 'banner_card A'
    },
    {
      id: 4, 
      title: 'The Natural Sculpted Look',
      desc: "You're seeing it everywhere. Here's how to get it.You're seeing it everywhere. Here's how to get it.",
      label: 'SHOP NOW▸',
      img: banner_img1,
      classID: 'banner_card B'
    },
  ]
  return (
    <div className='banner_container'>
      <Swiper className="container small__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        >
          {
            dict_banner.map(({id, title, desc, label, img, classID}) => {
              return (
                <SwiperSlide key={id} className='testmonial'>
                  <div className={classID}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <h1>{label}</h1>
                    <img src={img} alt='img'/>
                  </div>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </div>
  )
}
export default Banner
