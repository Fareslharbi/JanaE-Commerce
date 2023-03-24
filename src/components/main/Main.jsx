import React from 'react'
import './Main.css'
import SubMain from './submain/SubMain'
import LongSubMain from './longsubmain/LongSubMain'
import OffersMain from './offersMain/OffersMain'
import Banner from './banner/Banner'
import Categories from './categories/Categories'

const Main = () => {
  return (
    <div className='main_container'>
      <SubMain/>
      <LongSubMain/>
      <OffersMain/>
      <Banner/>
      <Categories/>
      <Banner/>
    </div>
  )
}

export default Main
