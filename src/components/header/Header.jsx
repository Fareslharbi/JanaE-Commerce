import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { TbBuildingStore } from 'react-icons/tb';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { CgLogIn } from 'react-icons/cg';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagDash } from 'react-icons/bs';
import './Header.css'

const Header = () => {
  return (
    <>
    <div className='header_container'>
      <h3>Jana</h3>
      <div className='searchBar'>
        <input type="text" className="searchBar" name="search" placeholder='What are you looking for?'/><BsSearch/>
      </div>
      <div className='storeServ'>
        <h4>Stores & Services</h4>
        <TbBuildingStore/>
      </div>
      <div className='storeServ'>
        <MdOutlinePeopleAlt/>
        <h4>Community</h4>
      </div>
      <div className='storeServ'>
        <CgLogIn/>
        <h4>SignIn</h4>
      </div>
      <div className='storeServ'>
        <HiOutlineChatAlt2/>
        <AiOutlineHeart/>
        <BsBagDash/>
      </div>
    </div>
    <div className='subHeader_container'>
      <h4>New</h4><h4>Brands</h4><h4>Makeup</h4><h4>Skincare</h4><h4>Hair</h4><h4>Fragrance</h4><h4>Tools & Brushes</h4><h4>Bath & Body</h4><h4>Mini Size</h4><h4>Gifts</h4><h4>Beauty Under 20$</h4><h4>Sales & Offers</h4>
    </div>
  </>
  )
}

export default Header
