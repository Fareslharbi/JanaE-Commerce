import React from 'react'
import './Footer.css'
import {FiTwitter} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Jana Comapny</a>
      <ul className='permalinks'>
        <li><a href="#about" className='lang_about'>Fashion & Design</a></li>
        <li><a href="#experience" className='lang_exp'>Accessories</a></li>
        <li><a href="#services" className='lang_ser'>Cosmetics & perfumes</a></li>
        <li><a href="#portfolio" className='lang_portfo'>Design & Printing</a></li>
        <li><a href='#testimonials' className='lang_testttt'>Photography</a></li>
        <li><a href='#certifications' className='lang_certification11'>Handicrafts</a></li>
        <li><a href="#contact" className='lang_con'>Parties and Gifts</a></li>
        <li><a href="#contact" className='lang_con'>Cooking & Sweets</a></li>
        <li><a href="#contact" className='lang_con'>Coffee & Spices</a></li>
        <li><a href="#contact" className='lang_con'>Retail Sale</a></li>
        <li><a href="#contact" className='lang_con'>Decoration</a></li>
        <li><a href="#contact" className='lang_con'>Educational Services & Electronic Applications</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithub/></a>
        <a href="https://twitter.com/FaresLharbi"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small className='lang_rights'>&copy; Jana Comapny. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
