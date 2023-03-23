import React from 'react'
import './Main.css'
import SubMain from './submain/SubMain'
import LongSubMain from './longsubmain/LongSubMain'
import OffersMain from './offersMain/OffersMain'
const Main = () => {
  return (
    <div>
      <SubMain/>
      <LongSubMain/>
      <OffersMain/>
    </div>
  )
}

export default Main
