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
  const dict_subMain = [
    {
      id: 1, 
      classID: 'subMain_banner A',
      img: swipeImg,
      title: 'Trending Clean Makeup',
      desc: "Picks you'll love, minus ingredients you might not.",
      label: 'SHOP NOW',
    },
    {
      id: 2, 
      classID: 'subMain_banner B',
      img: swipeImg1,
      title: 'Trending Clean Makeup',
      desc: "Picks you'll love, minus ingredients you might not.",
      label: 'SHOP NOW',
    },
    {
      id: 3, 
      classID: 'subMain_banner C',
      img: swipeImg2,
      title: 'Trending Clean Makeup',
      desc: "Picks you'll love, minus ingredients you might not.",
      label: 'SHOP NOW',
    },
    {
      id: 4, 
      classID: 'subMain_banner D',
      img: swipeImg3,
      title: 'Trending Clean Makeup',
      desc: "Picks you'll love, minus ingredients you might not.",
      label: 'SHOP NOW',
    },
    {
      id: 5, 
      classID: 'subMain_banner E',
      img: swipeImg4,
      title: 'Trending Clean Makeup',
      desc: "Picks you'll love, minus ingredients you might not.",
      label: 'SHOP NOW',
    },
    {
      id: 6, 
      classID: 'subMain_banner F',
      img: swipeImg5,
      title: 'Trending Clean Makeup',
      desc: "Picks you'll love, minus ingredients you might not.",
      label: 'SHOP NOW',

    },
    
  ]
  return (
    <div className='submain_container'>
      <div className='img_container'>
        <Swiper className="custom-swiper"
        // install Swiper modules
        modules={[ Pagination]}
        slidesPerView={3}
        > 
        {
          dict_subMain.map(({id, img, title, desc, label, classID}) => {
            return (
              <SwiperSlide key={id} className={classID}>
                  <div class="card">
                    <div>
                      <img src={img} alt='logo'/>
                    </div>
                    <div className='swip_img_desc'>
                      <h2>{title}</h2>
                      <h5>{desc}</h5>
                      <h3>{label} <AiOutlineArrowRight/></h3>
                    </div>
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
export default SubMain